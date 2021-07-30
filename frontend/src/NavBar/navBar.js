import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, useNavigate } from 'react-router-dom';
import './navBar.css'

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
}));



export default function ButtonAppBar({ user, setUser, setAppState }) {
  const classes = useStyles();

  const navigate = useNavigate();

  const isAuthenticated = Boolean(user?.email);

  const handleOnLogout = () => {
    setAppState({});
    setUser({});
    navigate("/");
  };

  const button = isAuthenticated ? (
    <button className="btn primary" onClick={handleOnLogout}>
      Logout
    </button>
  ) : (
    <Link to="/login">
      <button className="btn primary">Login</button>
    </Link>
  );



  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <Link to={"/"}>
              <img
                alt="codepath logo"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fchronus-mentor%2Fprograms%2Flogos-new%2F1433%2Foriginal.png%3F1574899383&f=1&nofb=1"
              />
          </Link>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            LifeTracker
          </Typography>

          <div className="activities">
          <Link to="/" style={{ color: '#FFF' }}>
            <Button color="inherit">Activity</Button>
          </Link>

          <Link to="/exercise" style={{ color: '#FFF' }}>
            <Button color="inherit">Exercise</Button>
          </Link>

          <Link to="/" style={{ color: '#FFF' }}>
            <Button color="inherit">Nutrition</Button>
          </Link>

          <Link to="/sleep" style={{ color: '#FFF' }}>
            <Button color="inherit">Sleep</Button>
          </Link>
          </div>
          
          {user?.email ? (
            <li>
              <Button color="inherit" onClick={handleOnLogout}> Logout </Button>
            </li>
          ) : (
            <li>
          <Link to="/login" style={{ color: '#FFF' }}>
            <Button color="inherit">Login</Button>
          </Link>
         
          <Link to="/register" style={{ color: '#FFF' }}>
            <Button color="inherit">Register</Button>
          </Link>
          
            </li>
            
          )}

         
        </Toolbar>
      </AppBar>
    </div>
  );
}
