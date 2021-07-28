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
import "./registerPage.css";
// import { withStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import apiClient from "../../services/apiClient";
import ButtonAppBar from "../NavBar/navBar";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    margin: theme.spacing(4, 13, 2), //changes the position
    // alignItems: 'center',
    marginTop: theme.spacing(15),
    color: "#E3ECFF",
  },

  fnameInput: {
    borderRadius: 7,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    right: 50,
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

export default function Registration({ user, setUser }) {
  const classes = useStyles();
//   const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

//   useEffect(() => {
//     // if user is already logged in,
//     // redirect them to the home page
//     if (user?.email) {
//       navigate("/");
//     }
//   }, [user, navigate]);

  const handleOnInputChange = (event) => {
    // checking for valid email
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

//   const handleOnSubmit = async (e) => {
//     e.preventDefault();
//     setErrors((e) => ({ ...e, form: null }));
//     // make api call to register user
//     const { data, error } = await apiClient.signupUser({
//       first_name: form.first_name,
//       last_name: form.last_name,
//       email: form.email,
//       password: form.password,
//     });
//     if (error) setErrors((e) => ({ ...e, form: error }));
//     if (data?.user) {
//       setUser(data.user);
//       apiClient.setToken(data.token);
//     }
//   };
  return (
    <StylesProvider injectFirst>
       <ButtonAppBar/>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>

          {/* FIRST NAME */}
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* <fnameInput
              className={classes.inputBase}
              /> */}

                <TextField
                  className={classes.fnameInput}
                  autoComplete="fname"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleOnInputChange}
                  // variant="filled"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>

              {/* LAST NAME */}
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.lnameInput}
                  // variant="filled"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleOnInputChange}
                  autoComplete="lname"
                />
              </Grid>

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
                  value={form.email}
                  onChange={handleOnInputChange}
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
                  value={form.password}
                  onChange={handleOnInputChange}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>

              {/* REGISTER BUTTON */}
            </Grid>
            <Button
              type="submit"
              width="50px"
              variant="contained"
              color="primary"
            //   onClick={handleOnSubmit}
              className={classes.submit}
            >
              Register
            </Button>

            {/* LOGIN LINK */}
            <div className="loginLink"></div>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2" className={classes.link}>
                  Already have an account? Log in
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
