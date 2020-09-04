import React, {useState, useContext} from 'react';
import {Container,Avatar, Button, CssBaseline, TextField, FormControlLabel, 
         Link, Grid, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import AllAlumni from '../alumni/AllAlumni'

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

const  CompanyLogin =()=> {
  const classes = useStyles();
  const {setAuthToken} = useContext(AuthContext)
  const {register, handleSubmit, errors, control} = useForm({ mode:'onChange', reValidateMode:'onChange' })
  const URL = `http://localhost:8080/company/login`
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [login, setLogin] = useState(false);
 
  const onSubmit = async ({email,password}) => {
    console.log(email, password)
      try {
        const res = await axios.post(URL, {email, password})
        const status = res.data.success;
        if(status){
          setLogin(true)
          setAuthToken(res.data.token)
        }
          setError(true)
      } catch (error) {
        setError(error)
      }
  }

  if(login){
    return <Redirect to="/allAlumni" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            error={errors.email?true: false}
            value={email}
            inputRef={register({required: true})}
            onChange={(e)=>setEmail(e.target.value)}
          />
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
            inputRef={register({required: true})}
            error={errors.password?true: false}
            value={password}
            onChange ={(e)=>setPassword(e.target.value)}
          />
          {error? <p className="pl-5" style={{color: 'red'}}>invalid email or password</p> : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log in
          </Button>
          <Grid container style={{display:'flex', justifyContent:'flex-end'}}> 
            <Grid item>
              <Link href="/company/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default CompanyLogin;