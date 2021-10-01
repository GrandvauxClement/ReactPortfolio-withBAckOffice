import React from "react";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import quisuisje from "../../assets/image/quiSuisJe.jpg"
import Button from "react-bootstrap/Button";
import monCv from "../../assets/pdf/test.pdf"
function Apropos() {
    return(
        <div className='container' id='aPropos'>
            <Row>
                <Col sm={12} md={6}>
                    <h2 className='my-color-blue h2'>Qui suis-je ?</h2>
                    <p className="mt-4">Je suis <b><i>Clément Grandvaux,</i></b> Développeur web & Mobile, passionné par les nouvelles technologies et leurs facultés à améliorer la productivité des entreprises.</p>
                    <p>Passionné par les technologies Web depuis plusieurs années, je suis àvotre disposition pour répondre à tout type de projets de créations de
                    sites internet vitrine, e-commerce, de développement spécifique ou d&apos;application web.
                    </p>
                    <p>Toutes mes compétences me permettent d&apos;être présent à vos côtés de la définition du cahier des charges de votre projet au déploiement en ligne de celui-ci.</p>
                    <div className="text-center mt-4">
                        <a target="_blank" rel="noreferrer" href={monCv}><Button className="button-myBlue" variant="#7FB6D4" > Voir mon CV</Button></a>
                    </div>
                </Col>
                <Col>
                   <img src={quisuisje} className='img-fluid' alt='moi'/>
                </Col>
            </Row>
        </div>
    )
}
export default Apropos
