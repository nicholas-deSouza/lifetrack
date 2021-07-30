import ButtonAppBar from "../NavBar/navBar"
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import './exerciseInfo.css'
import SimpleCard from "../Card/card";
import apiClient from "../Services/apiClient";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  backgroundColor: "#292B3E"
}));


export default function ExerciseBar() {
  const classes = useStyles();

  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetchExercises = async () => {
      setIsFetching(true);
      console.log("we are here");
      const { data, error } = await apiClient.listExercises();
      console.log("data", { data });
      if (data) setExercises(data.exercises);
      if (error) setError(error);
      setIsFetching(false);
    };

    fetchExercises();
  }, []);

  return (
    <div className={classes.root}>
        
      <AppBar position="static">
          <ButtonAppBar/>
        <Toolbar style={{ background: '#2E3B55' }}>
            <h1>Exercise</h1>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      <div className="add-exercise">
        <Button style={{ background: '#FFF' }}>Add Exercise</Button>
      </div>
    <SimpleCard/>
    </div>
  );
}
