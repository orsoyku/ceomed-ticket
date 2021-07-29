import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as ticketActions from '../../redux/actions/ticketActions'




const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  containerTicket: {
    backgroundColor: 'pink !important'

  },
  paper: {
    paddingBottom: 50,
    width: '75vh',
    margin: "20px 60px 20px 85px"
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  green:{
    color: '#fff',
    backgroundColor: green[500],
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

const TicketCard = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.actions.getTickets()
  }, [])

  const selectedTicket = ticket => {
    console.log(ticket.id)
    props.actions.getTicket(ticket.id)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          MailBox
        </Typography>
        <List className={classes.list}>
          {props.tickets.map(ticket => (
            <div key={ticket.id} onClick={() => selectedTicket(ticket)} >
              <ListSubheader className={classes.subheader}>{ticket.date}</ListSubheader>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar className={classes.green}>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={ticket.subject} secondary={ticket.message} />
              </ListItem>
            </div>


          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    tickets: state.getTicketsReducer,
    ticket: state.getTicketReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTickets: bindActionCreators(ticketActions.getTickets, dispatch),
      getTicket: bindActionCreators(ticketActions.getTicket, dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);

