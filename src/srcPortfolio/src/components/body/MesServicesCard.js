import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import PropTypes from "prop-types";


function MesServicesCard({service}) {
    return (
            <Card sx={{ maxWidth: 400 }} style={{backgroundColor: "#7fb6d4", fontSize: 18}} className='h-100'>
                <CardHeader style={{minHeight: 98}}
                    avatar={
                        <Avatar src={service.logo} alt={service.id}/>
                    }
                            title={<h6>{service.title}</h6>}
                            subheader={<small>{service.subtitle}</small>}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={service.image}
                    alt={service.id}
                />
                <CardContent style={{minHeight: 160}}>
                    <Typography variant="body2" color="text.secondary">
                        {service.textUn}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {service.textDeux}
                    </Typography>
                </CardContent>
            </Card>
    );
}
MesServicesCard.propTypes = {
    service: PropTypes.any,
}
export default MesServicesCard
