import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from '../assets/logo/monLogoBlancFondTransparent.png';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import React, {useState} from "react";
import MentionLegalesModal from "./MentionsLegalesModal";

function Footer() {
    const [modalMentionLegalShow, setModalMentionLegalShow] = useState(false);

    return (
        <>
        <footer>
            <div style={{backgroundColor: '#085c7f'}}>
                <Container>
                    <Row >
                        <Col className='d-flex justify-content-around'>
                            <img src={logo} alt="mon logo" style={{maxWidth:70}}/>
                            <div className='d-flex justify-content-around mt-1'>
                                <a href="https://fr.linkedin.com/in/cl%C3%A9ment-grandvaux-548ab219a" target="_blank" rel="noreferrer"><LinkedInIcon  sx={{ color: 'white', marginRight: 2, fontSize: 50 }}/></a>
                                <a href="https://github.com/GrandvauxClement" target="_blank" rel="noreferrer"><GitHubIcon  sx={{ color: 'white', marginRight: 2, fontSize: 50 }}/></a>
                                <a href="https://www.facebook.com/clement.grandvaux/" target="_blank" rel="noreferrer"><FacebookIcon sx={{ color: 'white', marginRight: 2, fontSize: 50 }} /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{backgroundColor: '#7FB6D4'}}>
                <Container>
                    <Row className='justify-content-around '>
                        <Col xs={12} md={4} >
                                <h4 className="text-white text-center mt-2">DÉVELOPPEUR INFORMATIQUE INDÉPENDANT</h4>
                                <p className="mx-2 mx-md-0">Développeur Web front-end & back-end freelance, je suis à votre disposition pour répondre à
                                    tout type de projets de création de sites internet, de développement spécfique ou d&apos;applications web.
                                Passionné par les technologies liées au Web, je mets mes compétences au service de vos besoins dans divers domaines.</p>
                        </Col>
                        <Col md={3} xs={12}>
                            <h4 className="text-white mt-2">CLÉMENT GRANDVAUX</h4>
                            <ul style={{listStyleType: 'none', paddingLeft: 0}} className="mt-1">
                                <li className="mt-3"> <EmailIcon sx={{ color: 'white', marginRight: 2, fontSize: 30 }} />clement.grandvaux@hotmail.com</li>
                                <li className="mt-2"> <PhoneAndroidIcon sx={{ color: 'white', marginRight: 2, fontSize: 30 }} /> 06 29 16 89 43</li>
                                <li className="mt-2"> <LocationOnIcon sx={{ color: 'white', marginRight: 2, fontSize: 30 }} /> 39210 Le Vernois (Jura)</li>
                            </ul>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{backgroundColor: '#085c7f'}}>
                <Container>
                    <Row className='align-items-center justify-content-around'>

                        <h6 className="text-center text-white">
                            <a href='#' className="text-white" onClick={() => setModalMentionLegalShow(true)}>Mentions légales</a>
                            | © Copyright 2021 - Clément GRANDVAUX. Tous droits réservés
                        </h6>
                    </Row>
                </Container>
            </div>
        </footer>
            <MentionLegalesModal show={modalMentionLegalShow} onHide={() => setModalMentionLegalShow(false)} />
            </>
    )
}
export default Footer
