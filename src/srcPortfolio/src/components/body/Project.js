import React from "react";
import ProjectDisplay from "./ProjectDIsplay";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

const Project = (props) => {
    const { projects } = props;
    console.log('propos'+ props);
    if (!projects || projects.length === 0) return <p>No projects, sorry</p>;
    return (
        <div id="fh5co-project" className='container'>

            <h2 className='list-head my-color-blue'>Mes Projets</h2>
            <Row>
                <div className="project-content">
                    {projects.map((project) => {
                        return (
                            /*<li key={project.id} className='list'>
                                <span className='project-text'>{project.name} </span>
                                <span className='project-description'>{project.description}</span>
                            </li>*/
                                <ProjectDisplay project={project} key={project.id} />
                        );
                    })}
                </div>
            </Row>
        </div>
    );
};
Project.propTypes = {
    projects: PropTypes.any,
}
export default Project;
