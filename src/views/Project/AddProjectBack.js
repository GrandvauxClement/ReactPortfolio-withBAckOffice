import React, {useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl} from "@material-ui/core";
import ChipInput from 'material-ui-chip-input'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

import DateFnsUtils from '@date-io/date-fns';
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import UploadImages from "../../components/ImagesUpload/images-upload";


const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);


export default function AddProjectBack() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles();
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={11}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Ajouter un nouveau projet</h4>
                            <p className={classes.cardCategoryWhite}>remplissez les champs suivants</p>
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                    <CustomInput
                                        labelText="Id (disabled)"
                                        id="id-disabled"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            disabled: true,
                                        }}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={8}>
                                    <CustomInput
                                        labelText="Titre"
                                        id="titre"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>

                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <div className="App">
                                        <FormControl style={{ width: "100%" }}>
                                            <ChipInput
                                                className="customChipInput"
                                                label="Renseignez les technologies utilisé"
                                                defaultValue={["PHP", "Symfony"]}
                                                helperText="(02/30)"
                                                // onChange={(chips) => handleChange(chips)}
                                            />
                                        </FormControl>
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer >
                                <GridItem xs={12} sm={12} md={6}>
                                    <div className="mt-4">
                                        <DatePicker variant="inline" label="Date de création" value={selectedDate} onChange={handleDateChange} />
                                    </div>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                    <CustomInput
                                        labelText="Lien (url) du projet"
                                        id="urlProjet"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <InputLabel style={{ color: "#AAAAAA" }}>Decsription</InputLabel>
                                    <CustomInput
                                        labelText="Veuillez écrire ici votre description de votre projet..."
                                        id="description"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                        inputProps={{
                                            multiline: true,
                                            rows: 5,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <UploadImages />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Ajouter le projet</Button>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
        </MuiPickersUtilsProvider>
    );
}