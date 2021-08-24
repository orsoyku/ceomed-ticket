import { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import './styles.scss';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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
    link:{
        cursor:'pointer' 
    }
}));

const AuthForm = () => {
    const classes = useStyles();
    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    return (
        // <section className="auth">
        //   <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        //   <form>
        //     <div className="control">
        //       <label htmlFor='email'>Your Email</label>
        //       <input type='email' id='email' required />
        //     </div>
        //     <div className="control">
        //       <label htmlFor='password'>Your Password</label>
        //       <input type='password' id='password' required />
        //     </div>
        //     <div className="actions">
        //       <button>{isLogin ? 'Login' : 'Create Account'}</button>
        //       <button
        //         type='button'
        //         className="toggle"
        //         onClick={switchAuthModeHandler}
        //       >
        //         {isLogin ? 'Create new account' : 'Login with existing account'}
        //       </button>
        //     </div>
        //   </form>
        // </section>
        <>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                {isLogin ? 'Login' : 'Sign Up'}
            </Typography>
            <form className={classes.form} noValidate>
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
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    {isLogin ? 'Login' : 'Create Account'}
                </Button>
                <Grid container>
                    <Grid item>
                        <Link className={classes.link} onClick={switchAuthModeHandler} variant="body2">
                        {isLogin ? "Don't have an account? Sign Up" : "Login with existing account"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default AuthForm;
