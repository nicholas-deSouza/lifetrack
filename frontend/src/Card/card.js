import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      {/* <CardContent style={{ marginTop: '12px' }}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
        </Typography>
      </CardContent> */}
      <h1>

          {/* title={exercise.name}
          subheader={(exercise.timestamp, exercise.name, exercise.name)} */}

      </h1>

      <Typography variant ="h3" color="textSecondary">

        {/* Information: Duration: {exercise.duration} and Intensity:{" "}{exercise.intensity} */}

      </Typography>


    </Card>
  );
}
