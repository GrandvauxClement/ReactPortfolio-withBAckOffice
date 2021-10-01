import Project from "./Project";
import Apropos from "./Apropos";
import MesServices from "./MesServices";
import React, { useEffect, useState } from 'react';
import WithDataLoading from '../WithDataLoading'
import Contact from "./Contact";


function Body() {
    const DataLoading = WithDataLoading(Project);
    const [appState, setAppState] = useState( {
        loading: false,
        projects: null
    });

    useEffect( () => {
        setAppState( {loading: true});
        const apiUrl = `https://127.0.0.1:8000/api/projets`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((projects) => {
                setAppState( {loading: false, projects: projects['hydra:member']});
            });
    }, [setAppState]);
 return (
     <div>
         <Apropos />
         <MesServices />
         <DataLoading isLoading={appState.loading} projects={appState.projects}/>
         <Contact />
     </div>
 )
}
export default Body
