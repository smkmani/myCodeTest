import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from "react-redux";
import { changeTaskRequest } from "./Redux/actions";

import "./App.css";

export default function OutlinedCard(props) {
  const {status, listItem = {}} = props || {};
  const {title ="", desCription="", id = null} = listItem || {};
  const dispatch = useDispatch();
  const handleMoveTask  = (action, tId)=>{
   let moveTo = null; 
    if(status === "backlog"){
      moveTo = "todo";
    }else if(status === "todo"){
      moveTo = action === "P" ? "backlog" : "inprogress";
    }else if(status === "inprogress"){
      moveTo = action === "P" ? "todo" : "complete";
    }else if(status === "complete" ){
      moveTo = "inprogress";
    }
     dispatch(changeTaskRequest({action, tId, moveTo, cStatus : status }));
  }
  return (
    <div className='cardBg'> 
        <Box sx={{ minWidth: 275 }} key={id} >
           <Card variant="elevation" {...props}>
           <React.Fragment>
              <CardContent >  
                <div className='IconDiv'>
                 {status !== "backlog" && ( <IconButton onClick={()=>{handleMoveTask("P", id)}} aria-label="delete" size="small">
                    <ArrowBackIcon fontSize="inherit" />
                  </IconButton>)}
                  {status !== "complete" && (
                     <IconButton onClick={()=>{handleMoveTask("N", id)}} aria-label="delete" size="small">
                         <ArrowForwardIcon fontSize="inherit" />
                     </IconButton>
                  )}
                </div>
                <Typography variant="h5" component="div" className='cardTitle'>
                  {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" className='cardTitle'>
                  {desCription}
                </Typography>
              </CardContent>
            </React.Fragment>
           </Card>
        </Box>
    </div>  
  );
}
