import React, { useState } from 'react';
import "../../styles/project.css"
import ModalProject from "./ModalProject";
import PropTypes from "prop-types";
function ProjectDisplay({project}) {
    const projectImage = 'url(https://www.portfolioback.clementgrandvaux.fr/public/image/projet/' + project.images[0]+')';
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
                <div className="col-forth">
                    <div className="project animate-box" style={{backgroundImage: projectImage}} onClick={() => setModalShow(true)}>
                        <div  className="desc">
                            <span>Application</span>
                            <h3 className='text-white'>{project.titre}</h3>
                        </div>
                    </div>
                </div>
            <ModalProject show={modalShow} onHide={() => setModalShow(false)} project={project} />
            </>

    )
}
ProjectDisplay.propTypes = {
    project: PropTypes.any
}
export default ProjectDisplay
