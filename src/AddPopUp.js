import React, {useRef} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import { addTaskRequest } from "./Redux/actions";
import { useDispatch } from "react-redux";

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width:400,
        textAlign:"center"
    },
}));
export default function AnimatedModal(props) {
    const {status} = props || {};
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const titleRef = useRef(null);
    const desRef = useRef(null);
    const dispatch = useDispatch();
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onHandleClick = () => {
        const id = Math.floor(Math.random() * 100);
        const title = titleRef.current.value;
        const desCription = desRef.current.value
        setOpen(false);
        if(id && title && desCription){
            dispatch(addTaskRequest({id, title, desCription, status}));
        }
    };
    const onCancelClick = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen}>
               Add Task
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>{`Add ${status} Task`}</h2>
                        <TextField id="outlined-basic" style={{width:300}} label="Title" variant="outlined" inputRef={titleRef} /> <br/>
                        <br/>
                        <TextField id="outlined-basic" style={{width:300}}  label="Description" variant="outlined" inputRef={desRef} />   
                        <br/>
                        <br/>
                        <Button variant="contained" style={{marginRight:20}} onClick={()=>{onHandleClick()}}>Add</Button>
                        <Button variant="contained" onClick={()=>{onCancelClick()}}>Cancel</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}