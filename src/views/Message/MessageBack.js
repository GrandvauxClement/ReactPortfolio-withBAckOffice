import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardBody from "../../components/Card/CardBody";
import TableMessage from "../../components/Table/TableMessage";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0",
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF",
        },
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

const useStyles = makeStyles(styles);

export default function MessageBack(props) {
    const classes = useStyles();
    const { messages } = props;
    if (!messages || messages.length === 0) return <p>No message, sorry</p>;
    let monTableau = Object.keys(messages).map(
        function(cle) {
            return [ messages[cle].id, messages[cle].name, messages[cle].email, messages[cle].message, messages[cle].id];
        }
    );
    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="info">
                        <h4 className={classes.cardTitleWhite}>Mes Messages</h4>
                        <p className={classes.cardCategoryWhite}>
                            Gestionnaire de mes messages
                        </p>
                    </CardHeader>
                    <CardBody>
                        <TableMessage tableHeaderColor="primary"
                                      tableHead={["Id", "Nom/Prenom", "Email", "Message", "Action"]}
                                      tableData={monTableau}/>
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    )
}
