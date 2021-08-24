import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/Email';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: "20px 60px 20px 60px",
        width: '85vh'
    },
    message: {
        width: '100%'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.warning.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: theme.palette.warning.main,
    },
}));

export default function NewTicket() {


    const exampleData = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', year: 1966 },
        { title: 'Fight Club', year: 1999 },]

    const options = exampleData.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create a New Ticket
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                <Autocomplete
                                    id="grouped-demo"
                                    options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                                    groupBy={(option) => option.firstLetter}
                                    getOptionLabel={(option) => option.title}
                                    style={{ height: 20 }}
                                    renderInput={(params) => <TextField {...params} label="To" variant="outlined" />}
                                />
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom>
    
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-textarea"
                                label="Message"
                                multiline
                                className={classes.message}
                                variant="outlined"
                                rows={6}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        className={classes.submit}
                    >
                        Send
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">

                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}