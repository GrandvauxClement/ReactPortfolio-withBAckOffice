import WithDataLoading from "../../srcPortfolio/src/components/WithDataLoading";
import ProjectBackTable from "./ProjectBackTable";
import React, {useEffect, useState} from "react";
import UserService from "../../srcPortfolio/src/services/user.service"

function ProjetBackLoadData() {

    const DataLoading = WithDataLoading(ProjectBackTable);
    const [appState, setAppState] = useState({
        loading: false,
        projects:null
    });

    useEffect( () => {
        setAppState({loading: true});
        UserService.getAllProject().then(
            (response) => {
                setAppState({loading: false, projects: response.data['hydra:member']})
            }
        )
    }, [setAppState]);
    return (
        <DataLoading isLoading ={appState.loading} projects={appState.projects} />
    )

}
export default ProjetBackLoadData
