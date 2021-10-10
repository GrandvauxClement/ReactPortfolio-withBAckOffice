import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import WithDataLoading from "../../srcPortfolio/src/components/WithDataLoading";
import UserService from "../../srcPortfolio/src/services/user.service";
import EditProjectBack from "./EditProjectBack";
function EditProjectLoadData() {

    const {idProject} = useParams();
    // console.log(this.props.match.params.id)

    const DataLoading = WithDataLoading(EditProjectBack);
    const [appState, setAppState] = useState({
        loading: false,
        projects:null
    });

    useEffect( () => {
        setAppState({loading: true});
        UserService.getProjectById(idProject).then(
            (response) => {
                setAppState({loading: false, projects: response.data})
            }
        )
    }, [setAppState]);
    return (
        <DataLoading isLoading ={appState.loading} projects={appState.projects} />
    )
}
export default EditProjectLoadData
