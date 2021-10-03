import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "../../components/CustomButtons/Button";
import {Link} from "react-router-dom";

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


export default function ProjectBackTable(props) {
        const classes = useStyles();
        const { projects } = props;

    if (!projects || projects.length === 0) return <p>No projects, sorry</p>;
        let monTableau = Object.keys(projects).map(
            function(cle) {
        return [ projects[cle].id, projects[cle].titre, projects[cle].annee, "true", projects[cle].id];
        }
    );
    console.log(monTableau);
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Mes Projets</h4>
                            <p className={classes.cardCategoryWhite}>
                                Table de gestion de mes projets (edit, delete)
                            </p>
                            <Link to="/admin/project/add">
                                <Button color="info" >Ajouter un projet</Button>
                            </Link>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="primary"
                                tableHead={["id","Titre", "Annee", "Afficher", "Actions"]}
                                tableData={monTableau}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        );
}
