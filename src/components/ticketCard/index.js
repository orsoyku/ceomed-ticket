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
import * as filterActions from '../../redux/actions/filterActions'
import TicketSearch from '../ticketSearch';
import {useSelector} from 'react-redux'




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
  
  const searchedWord = useSelector((state)=>state.filterBySubjectReducer)
  console.log("searchedWord",searchedWord)
  const selectedTicket = ticket => {
    props.actions.getTicket(ticket.id)
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          MailBox
        </Typography>
        <TicketSearch  className="search" id="standard-search" label="Search Ticket" type="search"/>
        <List className={classes.list}>
          {props.tickets.filter(ticket=>ticket.subject.toLowerCase().includes(searchedWord.toLowerCase())).map(ticket => (
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
      getTicket: bindActionCreators(ticketActions.getTicket, dispatch),
      searchBySubject: bindActionCreators(filterActions.filterBySubject,dispatch)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketCard);

