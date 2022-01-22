import React, {useState} from "react"
import TextField from "@material-ui/core/TextField";
import UserService from "../../services/user.service"
import Button from "react-bootstrap/Button"
import AddAlert from "@material-ui/icons/Done";
import Snackbar from "../../../../components/Snackbar/Snackbar";

const initialFormValues = {
    name: "",
    email: "",
    objet: "",
    message: "",
    formSubmitted: false,
    succes: false
}

export const useFormControls = () => {
    // We'll update "values" as the form updates
    const [values, setValues] = useState(initialFormValues);
    // "errors" is used to check the form for errors
    const [errors, setErrors] = useState({});
    const validate = (fieldValues = values) => {
        // this function will check if the form values are valid
        let temp = {...errors}

        if ("name" in fieldValues)
            temp.name = fieldValues.name ? "" : "Ce champs est obligatoire."

        if ("email" in fieldValues) {
            temp.email = fieldValues.email ? "" : "Ce champs est obligatoire."
            if (fieldValues.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
                    ? ""
                    : "L'Email n'est pas valide."

        }

        if ("message" in fieldValues)
            temp.message =
                fieldValues.message ? "" : "Ce champ est obligatoire."
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
        validate({ [name]: value})
    }
    const handleFormSubmit = async (e) => {
        //this function will be triggered by the submit event
        e.preventDefault();
        if (formIsValid()) {
            // send to my back end data of form
           // await postContactForm(values);

                // POST request using fetch inside useEffect React hook
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: values.name, email: values.email, devis: false, objet: values.objet, message: values.message  })
                };
                fetch(
                  //  "https://www.portfolioback.clementgrandvaux.fr/api/contacts",
                    "https://127.0.0.1:8000/api/contacts",
                    requestOptions)
                    .then(
                        () => {
                            UserService.sendMailNotifForNewMessage(values.name, values.email, values.objet, values.message)
                            setValues({...initialFormValues});
                            document.querySelectorAll('form> .my-2 input').forEach(value => {
                                value.value = '';
                            })
                           document.querySelector('form> .my-2 textarea').value = '';
                        }
                    );


// empty dependency array means this effect will only run once (like componentDidMount in classes)

        }
    };
    const formIsValid = (fieldValues = values) => {
        // this function will check if the frm values and return a boolean
        const isValid =
            fieldValues.name &&
            fieldValues.email &&
            fieldValues.message &&
            Object.values(errors).every((x) => x === "");
        return isValid
    }
    return {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
    };
}

const inputFieldValues = [
    {
        name: "name",
        label: "Votre nom",
        id: "my-name"
    },
    {
        name: "email",
        label: "Votre email",
        id: "my-email"
    },
    {
        name: "objet",
        label: "Objet du mail",
        id: "my-objet"
    },
    {
        name: "message",
        label: "Écrivez votre message",
        id: "my-message",
        multiline: true,
        rows: 5
    }
];

function ContactForm() {
    const [tr, setTR] = React.useState(false);
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
        switch (place) {
            case "tr":
                if (!tr) {
                    setTR(true);
                    setTimeout(function () {
                        setTR(false);
                    }, 6000);
                }
                break;
            default:
                break;
        }
    };
   const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors
   } = useFormControls();
    return (
        <form className='d-flex flex-column' onSubmit={handleFormSubmit}>
            {inputFieldValues.map((inputFieldValue, index) => {
                    return (
                        <TextField
                            variant="filled"
                            key={index}
                            onBlur={handleInputValue}
                            onChange={handleInputValue}
                            name={inputFieldValue.name}
                            label={inputFieldValue.label}
                            multiline={inputFieldValue.multiline ?? false}
                            rows={inputFieldValue.rows ?? 1}
                            autoComplete="none"
                            {...(errors[inputFieldValue.name] && {
                                error: true,
                                helperText: errors[inputFieldValue.name]
                            })}
                            className='my-2 text-white'
                        />
                    );
            })}

            <Button type="submit" disabled={!formIsValid()} variant="#7FB6D4" style={{backgroundColor: '#085c7f', color:'white'}} onClick={()=>showNotification("tr")}> Envoyer </Button>
            <Snackbar
                place="tr"
                color="success"
                icon={AddAlert}
                message="Votre message a bien été envoyé - Je vous réponds dans les plus brefs délais."
                open={tr}
                closeNotification={() => setTR(false)}
                close
            />
        </form>
    )
}
export default ContactForm
