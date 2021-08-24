import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TicketCard from '../ticketCard';
import TicketDetail from '../ticketDetail/index'
import { connect } from 'react-redux';
import IconBtn from '../iconButton';
import NewTicket from '../newTicket';
import {useSelector} from 'react-redux'
import { bindActionCreators } from "redux";
import * as ticketActions from '../../redux/actions/ticketActions'

const CardList = (props) => {
  const newTicket = useSelector((state)=>state.newTicketStatusReducer);
  console.log(newTicket)
  const newTicketStatus = ()=>{ 
    props.actions.newTicketStatus(true);
    
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={3} lg={2}>
        <TicketCard />
      </Grid>
      <Grid item xs={12} md={9} lg={10}>
        {newTicket === false && <TicketDetail ticket={props.ticket[0]} />}
        {newTicket === true && <NewTicket/>}
      </Grid>
      <IconBtn onClick={newTicketStatus}/>
    </Grid>)
}

function mapStateToProps(state) {
  return {
    ticket: state.getTicketReducer,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      newTicketStatus: bindActionCreators(ticketActions.newTicketStatus, dispatch),
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);

