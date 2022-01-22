import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
function ModalProject(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{width: '100%'}}>
                    <h2 className='my-color-blue text-center'>{props.project.titre}</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Carousel variant="dark">
                    {props.project.images.map((image, index) =>
                        {
                            const srcImage = "https://www.portfolioback.clementgrandvaux.fr/public/image/projet/"+ image
                            return (
                                <Carousel.Item key={index}>
                                    <img className='d-block w-100' alt='presentation projet' src={srcImage}/>
                                </Carousel.Item>
                            )})}

                </Carousel>
                <Row>
                    <Col sm={12} lg={6}>
                        <h3 className='my-color-blue'>Description</h3>
                        <p>{props.project.description}</p>
                    </Col>
                    <Col sm={12} lg={6}>
                        <h3 className='my-color-blue'> Technologies</h3>
                        <ul className='d-flex flex-wrap '>
                            {props.project.technologie.map((techno, index)=> (
                                <li key={index} style={{listStyleType: 'none'}} className='mt-2'><Button variant="#7FB6D4" className='btn-modal mx-1'> {techno}</Button></li>
                            ))}
                        </ul>
                    </Col>
                </Row>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline" className='btn-modal' onClick={props.onHide}>Fermer</Button>
            </Modal.Footer>
        </Modal>
    )
}
ModalProject.propTypes = {
    project: PropTypes.any,
    onHide: PropTypes.bool
};
export default ModalProject
