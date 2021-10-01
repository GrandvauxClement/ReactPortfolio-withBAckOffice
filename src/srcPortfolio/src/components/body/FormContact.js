import React, {useState} from "react"
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button"

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
            console.log('values of my form :'+values.name +' '+values.email)

                // POST request using fetch inside useEffect React hook
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: values.name, email: values.email, devis: false, objet: values.objet, message: values.message  })
                };
                fetch('https://127.0.0.1:8000/api/contacts', requestOptions)
                    .then(response => console.log('response :' + response.json()) );


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
                        {...(errors[inputFieldValue.name] && {error: true, helperText: errors[inputFieldValue.name]})}
                        className='my-2 text-white'
                        />
                );
            })}

            <Button type="submit" disabled={!formIsValid()} variant="#7FB6D4" style={{backgroundColor: '#085c7f', color:'white'}}> Envoyer </Button>
        </form>
    )
}
export default ContactForm
