import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import VisibilityIcon from "@material-ui/icons/Visibility"

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";


const useStyles = makeStyles(styles);


export default function CustomTableMessage(props) {
    const classes = useStyles();
    const { tableHead, tableData, tableHeaderColor } = props;
    return (
        <div className={classes.tableResponsive}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
                        <TableRow className={classes.tableHeadRow}>
                            {tableHead.map((prop, key) => {
                                return (
                                    <TableCell
                                        className={classes.tableCell + " " + classes.tableHeadCell}
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        return (
                            <TableRow key={key} className={classes.tableBodyRow}>
                                {prop.map((prop, key) => {
                                    if (key === 4){
                                        let urlRediff = "/admin/message/show/" + prop
                                        return (
                                            <TableCell className={classes.tableCell} key={key} >
                                                {/*<Edit  />*/}
                                                <Link to={urlRediff}>
                                                    <Tooltip
                                                        title="Voir le message"
                                                        placement="top"
                                                        classes={{ tooltip: classes.tooltip }}
                                                    >
                                                        <IconButton
                                                            aria-label="Voir"
                                                            className={classes.tableActionButton}
                                                        >
                                                            <VisibilityIcon
                                                                style={{color: "#9c27b0"}}
                                                            />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Link>
                                            </TableCell>
                                        );
                                    } else {
                                        return (
                                            <TableCell className={classes.tableCell} key={key}>
                                                {prop}
                                            </TableCell>
                                        );
                                    }
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

CustomTableMessage.defaultProps = {
    tableHeaderColor: "gray",
};

CustomTableMessage.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray",
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
