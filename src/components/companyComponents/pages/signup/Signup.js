import React, {useState} from 'react';
import {Container,Avatar, Button, CssBaseline, TextField, FormHelperText, 
        Link, Grid, Typography} from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { makeStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'
import axios from 'axios'
import SuceessMessage from '../successMessage/success';


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



const  CompanySinup =()=> {
  const classes = useStyles();
  const {register, handleSubmit, errors} = useForm()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [singup, setSignup] = useState(false)
  const [error, setError]= useState(false)
  const URL = `http://localhost:8080/company/register`

  const onSubmit = async ({name, surname, email, password,companyName})=> {
      console.log(name,surname, email, password,companyName)
      try {
        const res = await axios.post(URL,{name, surname, email, password,companyName})
        const status = res.data.success;
        status?setSignup(true):setError(true);  
      } catch (error) {
        setError(error)
      }
  }

  if(singup){
  return <SuceessMessage name={name}/>
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sin up as a company
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
                        error={errors.name?true:false}
                        inputRef={register({required: true})}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
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
                        error={errors.surname?true:false}
                        inputRef={register({required: true})}
                        value={surname}
                        onChange={(e)=>setSurname(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>              
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="companyName"
                        label="Comapny Name"
                        name="companyName"
                        autoComplete="companyName"
                        error={errors.companyName?true:false}
                        inputRef={register({required: true})}
                        value={companyName}
                        onChange={(e)=>setCompanyName(e.target.value)}
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
                        error={errors.email?true:false}
                        inputRef={register({required: true, pattern: /\S+@\S+\.\S+/})}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        helperText="please enter valid email address"
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
                        error={errors.password?true:false}
                        inputRef={register({required: true, minLength: 6})}
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        helperText="please enter at least 6 characters"
                    />
                </Grid>
          {error? <p className="pl-5" style={{color: 'red'}}>email addresss already exists</p> : null}
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
              <Link href="/company/login" variant="body2">
                {"Already have an account? Log in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default CompanySinup;