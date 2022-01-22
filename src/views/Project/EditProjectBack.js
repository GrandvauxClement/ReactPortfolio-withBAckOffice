import React, {useState} from "react";
import UserService from "../../srcPortfolio/src/services/user.service";
import {makeStyles} from "@material-ui/core/styles";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { fr } from "date-fns/locale";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Card from "../../components/Card/Card";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import TextField from "@material-ui/core/TextField";
import {FormControl} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import UploadImages from "../../components/ImagesUpload/images-upload";
import Button from "../../components/CustomButtons/Button";

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
const initialFormValues = {
    titre: "",
    images: [],
    technologie: [],
    description: "",
    annee: "",
    url: ""
}

const useFormControls = (initialDateValue) => {
    // We'll update "values" as the form updates
    const [values, setValues] = useState(initialFormValues);
    // "errors" is used to check the form for errors
    const [errors, setErrors] = useState({});
    // Je recup le nom des images dl provenant du composant enfant
    const callbackNameImageUpload = (nameImage) => {
        values.images = nameImage.toString().split(',');
    }

    const validate = (fieldValues = values) => {
        // this function will check if the form values are valid
        let temp = {...errors}

        if ("titre" in fieldValues)
            temp.titre = fieldValues.titre ? "" : "Ce champs est obligatoire."

        if ("description" in fieldValues)
            temp.description = fieldValues.description ? "" : "Ce champs est obligatoire."

        setErrors({
            ...temp
        });

    }

    const handleInputValue = (e) => {
        // this function will be triggered by the text field's on blur and or onChanges events
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
        validate({[name]: value})
    }

    const handleChangeTechnoValue = (techno) => {
        // this function will be triggered by the text field's on blur and or onChanges events
        let myArray = techno.toString().split(',');

        setValues({
            ...values,
            ["technologie"]: myArray
        });
        validate({["technologie"]: myArray})
    }

    const handleFormSubmit = async (e) => {
        //this function will be triggered by the submit event
        e.preventDefault();
        if (formIsValid()) {

            UserService.addProject(values.titre, values.images, "true", values.description, values.technologie, selectedDate, values.url).then(
                ()=> {
                }
            )
        }
    }

    const formIsValid = (fieldValues = values) => {
        // this function will check if the form values and return a boolean
        const isValid = fieldValues.titre
            && fieldValues.description;
        return isValid;
    }
    const [selectedDate, handleDateChange] = useState(new Date(initialDateValue));
    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        handleChangeTechnoValue,
        errors,
        selectedDate,
        handleDateChange,
        callbackNameImageUpload
    };
}

const useStyles = makeStyles(styles);

function EditProjectBack(props) {
    const classes = useStyles();
    const {projects} = props;
    if (!projects || projects.length === 0) return <p>No projects, sorry</p>;
    const {
        handleInputValue,
        handleFormSubmit,
        handleChangeTechnoValue,
        formIsValid,
        errors,
        selectedDate,
        handleDateChange,
        callbackNameImageUpload
    } = useFormControls(projects.annee);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={fr}>
            <form onSubmit={handleFormSubmit}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={11}>
                        <Card>
                            <CardHeader color="primary">
                                <h4 className={classes.cardTitleWhite}> Modifier votre projet</h4>
                                <p className={classes.cardCategoryWhite}> remplacez les champs obsolètes par les nouvelles données </p>
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
                                        <TextField
                                            variant="filled"
                                            onBlur={handleInputValue}
                                            onChange={handleInputValue}
                                            defaultValue={projects.titre}
                                            name="titre"
                                            label="Titre du projet"
                                            rows={1}
                                            autoComplete="none"
                                            {...(errors["titre"] && {error: true, helperText: errors["titre"]})}
                                            className='my-2 text-white'
                                            fullWidth
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
                                                    defaultValue={projects.technologie}
                                                    helperText="(02/30)"
                                                    variant="filled"
                                                    // onBlur={handleChangeTechnoValue}
                                                    // onChange={handleInputValue}
                                                    name="titre"
                                                    fullWidth
                                                    onChange={(chips) => handleChangeTechnoValue(chips)}
                                                />
                                            </FormControl>
                                        </div>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer >
                                    <GridItem xs={12} sm={12} md={6}>
                                        <div className="mt-4">
                                            <DatePicker style={{backgroundColor: "#e8e8e8", paddingLeft:5}}
                                                        label="Date de création"
                                                        value={selectedDate}
                                                        onChange={(selectedDate) => {handleDateChange(selectedDate)}}
                                                        name="annee"
                                                        fullWidth
                                                        format="dd-MM-yyyy"
                                            />
                                        </div>
                                    </GridItem>
                                    <GridItem xs={12} sm={12} md={6}>
                                        <div className="mt-4">
                                            <TextField
                                                label="Lien (url) du projet"
                                                id="url"
                                                onBlur={handleInputValue}
                                                onChange={handleInputValue}
                                                defaultValue={projects.url}
                                                name="url"
                                                variant="filled"
                                                fullWidth
                                                rows={1}
                                            />
                                        </div>
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <TextField
                                            variant="filled"
                                            onBlur={handleInputValue}
                                            onChange={handleInputValue}
                                            name="description"
                                            label="Saisir votre description"
                                            defaultValue={projects.description}
                                            multiline={true}
                                            rows={5}
                                            autoComplete="none"
                                            {...(errors["description"] && {error: true, helperText: errors["description"]})}
                                            className='my-2 text-white'
                                            fullWidth
                                        />
                                    </GridItem>
                                </GridContainer>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <UploadImages nameUploadFile = {callbackNameImageUpload} />
                                    </GridItem>
                                </GridContainer>
                            </CardBody>
                            <CardFooter>
                                <Button type="submit" disabled={!formIsValid()} color="primary">Modifier le projet</Button>
                            </CardFooter>
                        </Card>
                    </GridItem>
                </GridContainer>
            </form>
        </MuiPickersUtilsProvider>
    )
}
export default EditProjectBack
