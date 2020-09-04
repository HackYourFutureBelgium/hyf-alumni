import React from 'react';
import {Container,Avatar, Button, CssBaseline, TextField, FormControlLabel, 
        Link, Grid, Typography} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  AlumniSignup =()=> {
  const classes = useStyles();
  const {register, handleSubmit, errors} = useForm({ mode:'onChange', reValidateMode:'onChange'})
  const onSubmit =(data)=> {
      console.log(data)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sin up as alumni
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="First Name"
                        name="name"
                        autoComplete="first name"
                        autoFocus
                        error={errors.name}
                        inputRef={register({required: true})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>              
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="surname"
                        label="Last Name"
                        name="surname"
                        autoComplete="surname"
                        error={errors.surname}
                        inputRef={register({required: true})}
                    />
                </Grid>
                <Grid item xs={12} >     
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        error={errors.email}
                        inputRef={register({required: true, pattern: /\S+@\S+\.\S+/})}
                    />
                </Grid>
                <Grid item xs={12}>   
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={errors.password}
                        inputRef={register({required: true})}
                    />
                </Grid>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sin Up
          </Button>
          <Grid container style={{display:'flex', justifyContent:'flex-end'}}> 
            <Grid item>
              <Link href="/alumni/login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default AlumniSignup;