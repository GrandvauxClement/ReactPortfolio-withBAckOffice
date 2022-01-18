import React from "react";
import ProjectDisplay from "./ProjectDIsplay";
import Row from "react-bootstrap/Row";
import PropTypes from "prop-types";

const Project = (props) => {
    const { projects } = props;
    if (!projects || projects.length === 0) return <p>No projects, sorry</p>;
    return (
        <div id="fh5co-project" className='container'>
            <h2 className='list-head my-color-blue h2'>Mes Projets</h2>
            <Row>
                <div className="project-content">
                    {projects.map((project) => {
                        return (
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
