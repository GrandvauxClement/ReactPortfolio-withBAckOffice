import React from 'react';
import PropTypes from "prop-types";

function WithDataLoading(Component) {
    return function WihLoadingComponent({ ...props }) {
        if (!props.isLoading) return <Component {...props} />;
        return (
            <p style={{ textAlign: 'center', fontSize: '30px' }}>
                Hold on, fetching data may take some time :)
            </p>
        );
    };
}
WithDataLoading.propTypes = {
    isLoading: PropTypes.any,
};
export default WithDataLoading;
