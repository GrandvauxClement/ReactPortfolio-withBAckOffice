import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactForm from "./FormContact";
function Contact() {
    return (
        <div className="bg-light py-3" id="contact">
            <div className='container my-bg-blue'>
                <Row className="my-2">
                    <Col xs={12} lg={6} className='my-3 order-1 order-lg-0'>
                        <h2 className='text-white h2'>Envoyer moi un message</h2>
                        <ContactForm />
                    </Col>
                    <Col xs={12} lg={6} className='my-3 order-0 order-lg-1'>
                        <h2 className='mb-2 text-white h2'>Me contacter</h2>
                        <div className='d-flex flex-column justify-content-around'>
                            <h5 className='my-3'>Une idée ? Un projet ? n&apos;hésitez pas à demander un devis ! (GRATUIT).</h5>
                            <h5 className='my-3'>Si vous avez des questions, contacter-moi. Je vous répondrai dans les plus brefs délais.</h5>
                            <ul style={{listStyleType: 'none',}} className="ms-2">
                                <li className="h4"> <EmailIcon style={{ color: 'white', marginRight: 4, fontSize: 42 }} />clement.grandvaux@hotmail.com</li>
                                <li className="h4"> <PhoneAndroidIcon style={{ color: 'white', marginRight: 4, fontSize: 42 }} /> 06 29 16 89 43</li>
                                <li className="h4"> <LocationOnIcon style={{ color: 'white', marginRight: 4, fontSize: 42 }} /> 39000 Lons-le-saunier (Jura)</li>
                                <li className="h4"> <SettingsIcon style={{ color: 'white', marginRight: 4, fontSize: 42 }} /> <strong>S.I.R.E.N :</strong>892 288 382</li>
                            </ul>

                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default Contact
