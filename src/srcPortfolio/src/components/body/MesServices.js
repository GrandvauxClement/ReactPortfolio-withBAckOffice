import React from "react";
import MesServicesCard from "./MesServicesCard";
import {dataServices} from "../../datas/Services"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function MesServices() {
    return (
        <div id='mesServices' className='bg-light'>
            <div className='container py-4'>
                <h2 className='my-color-blue h2'>Mes Services</h2>
                <Row className='justify-content-around'>
                {dataServices.map((service) => (
                    <Col sm={12} md={6} xxl={4} className='mt-5 h-100' key={service.id}>
                        <MesServicesCard service={service}/>
                    </Col>
                ))}
                </Row>
            </div>
        </div>
    )
}
export default MesServices
