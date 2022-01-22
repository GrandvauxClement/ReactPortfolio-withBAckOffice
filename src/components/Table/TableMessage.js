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
import Delete from "@material-ui/icons/Delete";

// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import UserService from "../../srcPortfolio/src/services/user.service";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import CustomButton from "../CustomButtons/Button";
import Snackbar from "../Snackbar/Snackbar";
import AddAlert from "@material-ui/icons/AddAlert";
import Dialog from "@material-ui/core/Dialog";


const useStyles = makeStyles(styles);

function RedirectActionProjet(action, id) {
    if (action === "delete") {
        // delete component
        UserService.deleteMessage(id).then(
            () => {
                window.location.reload();
            }
        )
    }
}




export default function CustomTableMessage(props) {
    const [open, setOpen] = React.useState(false);
    const [tc, setTC] = React.useState(false);


    React.useEffect(() => {
        // Specify how to clean up after this effect:
        return function cleanup() {
            // to stop the warning of calling setState of unmounted component
            var id = window.setTimeout(null, 0);
            while (id--) {
                window.clearTimeout(id);
            }
        };
    });

    const showNotification = (place) => {
        setTC(true);
        setTimeout(function () {
            setTC(false);
        }, 6000);
        switch (place) {
            case "tc":
                if (!tc) {
                    setTC(true);
                    setTimeout(function () {
                        setTC(false);
                    }, 6000);
                }
                break;
            default:
                break;
        }
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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

                                                <Tooltip
                                                    title={"Supprimer"}
                                                    placement="top"
                                                    classes={{tooltip: classes.tooltip}}>
                                                    <IconButton
                                                        aria-label="Supprimer"
                                                        className={classes.tableActionButton}
                                                        onClick={handleClickOpen}
                                                    >
                                                        <Delete style={{color: '#f44336'}}/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            Etes-vous sur de vouloir supprimer ce message ?
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <CustomButton  onClick={handleClose}>Annuler</CustomButton>
                                                        <CustomButton type="button" color="danger" onClick={ ()=> {handleClose(); RedirectActionProjet('delete', prop); showNotification("tc")}} autoFocus>
                                                            Supprimer
                                                        </CustomButton>
                                                        <Snackbar
                                                            place="tc"
                                                            color="success"
                                                            icon={AddAlert}
                                                            message="Message bien supprimée."
                                                            open={tc}
                                                            closeNotification={() => setTC(false)}
                                                            close
                                                        />
                                                    </DialogActions>
                                                </Dialog>
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
