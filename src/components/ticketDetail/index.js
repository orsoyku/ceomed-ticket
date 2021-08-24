import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function TicketDetail({ ticket }) {

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {ticket && <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact with the {ticket.requester}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                {ticket.subject}    
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                {ticket.message}  
              </Typography>
              {/* <TextField
                id="outlined-textarea"
                label="Message"
                multiline
                value={ticket.message}
                className={classes.message}
                variant="outlined"
                inputProps={
                  { readOnly: true, }
                }
                rows={6}
              /> */}
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-textarea"
                label="Answer"
                multiline
                className={classes.message}
                variant="outlined"
                rows={6}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Mark as read."
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
                {ticket.date}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>}
    </Container>
  );
}