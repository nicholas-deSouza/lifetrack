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
import apiClient from "../Services/apiClient";
import SimpleCard from "../Card/card";
import Grid from "@material-ui/core/Grid";


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


export default function ExerciseBar({user, addExercise}) {
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



  if (user?.email){
  return (
  
    <div className={classes.root}>

      <div className="title">
      <Toolbar style={{ background: '#2E3B55' }}>
            <h1>Exercise</h1>
        </Toolbar>
      </div>
      
      <div className="content">
          <div className="add-exercise">
            <Button style={{ background: '#FFF' }}>Add Exercise</Button>
          </div>
      </div>

      <Grid container spacing = {3}>
        {exercises?.map((exercise) => (
            <Grid item key={exercise.id} xs={12} md={6} lg={4}>
              <Card exercise={exercise} />
            </Grid>
          ))}
        </Grid>

        <div className="exercise-form">

            


        </div>
        



      <AppBar position="static">
      </AppBar>
    <SimpleCard/>
    </div>
  );
        }else{
            return <h1> log in please</h1>
  }
}

