import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 550,
    maxWidth: 500,
    marginLeft: 450,
    marginTop:25,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginTop:12,
  },
});

export default function SimpleCard({ exercise }) {  
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;


  console.log(exercise, "in card")

  return (
    <div>
        <Card className={classes.root}>
      
        <Typography variant ="h7" color="textSecondary">
          Title of Exercise: {exercise.name}
          <br/>
          Category of Exercise: {exercise.category}
          <br/>
          <br/>
          Duration: {exercise.duration}(s) and Intensity: {exercise.intensity}/10
        </Typography>
          
        <br/>

      {/* <Typography variant ="h6" color="textSecondary">
        
        Information: Duration: {exercise.duration} and Intensity:{" "}{exercise.intensity}

      </Typography> */}
    </Card>
    </div>
    
  );
}
