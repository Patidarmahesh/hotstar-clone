import React, { Fragment } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const KidsCard = (props) => {
  const {image} = props.cardValue;
  return (
    <Fragment>
      <Card className="Zoom_Hover" sx={{width:"15.6%",height:"100%"}}>
            <img src={image} style={{width:"100%",height:"100%"}}></img>
      </Card>
    </Fragment>
  );
};
export default KidsCard;
