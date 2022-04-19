import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import OutlinedCard from "./Card";
import {
  TEXT_BACKLOG,
  TEXT_INPROGRESS,
  TEXT_TODO,
  TEXT_COMPLETE,
} from "./Redux/string";
import AnimatedModal from "./AddPopUp";
import { useSelector } from "react-redux";
import "./App.css";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Home() {
  const getTodoList = useSelector(state => state.toToListReducers.toToList);
  const {backlog, complete, inprogress, todo} = getTodoList || {};
  return (
      <div className="App">
        <div className="parentDiv">
          <div className="divLeft">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Item className="borderBottomBackLog">
                  <b>{TEXT_BACKLOG}</b>
                </Item>
              </Grid>
              <Grid className="marginLeftRignt" item xs={12}>
                <Item className="gridMinHeight">
                  {backlog ? backlog.map((val)=> <OutlinedCard status="backlog" listItem={val} />): <h3>No {TEXT_BACKLOG}</h3>}
                </Item>
                <AnimatedModal status={TEXT_BACKLOG} />
              </Grid>
            </Grid>
          </div>
          <div className="divRight">
            <div className="divRightInnerDiv">
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item className="borderBottomTodo">
                    <b>{TEXT_TODO}</b>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item className="borderBottomInProgress">
                    <b>{TEXT_INPROGRESS}</b>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item className="borderBottomComplete">
                    <b>{TEXT_COMPLETE}</b>
                  </Item>
                </Grid>
                <Grid className="marginLeftRignt" item xs={4}>
                  <Item className="gridMinHeight">
                    {todo.map((val)=> <OutlinedCard status="todo" listItem={val} />)}
                  </Item>
                  <AnimatedModal status={TEXT_TODO} />
                </Grid>
                <Grid className="marginLeftRignt" item xs={4}>
                  <Item className="gridMinHeight">
                    {inprogress.map((val)=> <OutlinedCard status="inprogress" listItem={val} />)}
                  </Item>
                  <AnimatedModal status={TEXT_INPROGRESS} />
                </Grid>
                <Grid className="marginLeftRignt" item xs={4}>
                  <Item className="gridMinHeight">
                    {complete.map((val)=> <OutlinedCard status="complete" listItem={val} />)}
                  </Item>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
