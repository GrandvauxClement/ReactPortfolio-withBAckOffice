import WithDataLoading from "../../srcPortfolio/src/components/WithDataLoading";
import MessageBack from "./Message";
import React, {useEffect, useState} from "react";
import UserService from "../../srcPortfolio/src/services/user.service"

function MessageBackLoadData() {

    const DataLoading = WithDataLoading(MessageBack);
    const [appState, setAppState] = useState({
        loading: false,
        messages:null
    });

    useEffect( () => {
        setAppState({loading: true});
        UserService.getMessage().then(
            (response) => {
                setAppState({loading: false, messages: response.data['hydra:member']})
            }
        )
    }, [setAppState]);
    return (
        <DataLoading isLoading ={appState.loading} projects={appState.messages} />
    )

}
export default MessageBackLoadData
