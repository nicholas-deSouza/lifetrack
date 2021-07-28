import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import clsx from 'clsx';
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, alpha, StylesProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./loginPage.css";
import ButtonAppBar from "../NavBar/navBar";
// import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50ch",

  },

  form: {
    marginTop: theme.spacing(8),
    width: "50ch",
    borderRadius: 50,
  },

  submit: {
    margin: theme.spacing(4, 19, 2), //changes the position
    alignItems: "center",
    backgroundColor: "#3D68DE",
  },

  link: {
    margin: theme.spacing(4, 12, 2), //changes the position
    // alignItems: 'center',
    marginTop: theme.spacing(15),
    color: "#E3ECFF",
  },

  forgotLink: {
    margin: theme.spacing(4, 20, 2), //changes the position
    alignItems: 'right',
    marginTop: theme.spacing(15),
    // marginLeft: theme.spacing(34),
    color: "#E3ECFF",
    width: 50,
  },


  lnameInput: {
    borderRadius: 7,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    left: 0,
    // width: 'auto',
    width: 260,
    height: 44,
    padding: "10px 12px",
    fontFamily: [
      '"Montserrat"', //our font
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },

  longInput: {
    borderRadius: 7,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    right: 50,
    // width: 'auto',
    width: 537,
    height: 44,
    padding: "10px 12px",
    fontFamily: [
      '"Montserrat"', //our font from figma
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    
    <StylesProvider injectFirst>
       <ButtonAppBar/>
      <Container component="main" maxWidth="xs">
        
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h5">
            Log In
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
          
              {/* EMAIL */}
              <Grid item xs={12}>
                <TextField
                  className={classes.longInput}
                  // variant="filled"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              {/* PASSWORD */}
              <Grid item xs={12}>
                <TextField
                  className={classes.longInput}
                  // variant="filled"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>

                   {/* FORGOT PASSWORD LINK */}
            <div className="forgotLink"></div>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" className={classes.forgotLink}>
                  Forgot Password? 
                </Link>
              </Grid>
            </Grid>


              {/* LOG IN BUTTON */}
           </Grid>
            <Button
              type="submit"
              width="50px"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              LOG IN
            </Button>

            {/* REGISTER LINK */}
            <div className="registerLink"></div>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" className={classes.link}>
                  Don't have an account? Register
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </StylesProvider>
  );
}
