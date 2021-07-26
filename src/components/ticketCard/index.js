import React, { useEffect } from 'react';
import './styles.scss'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as ticketActions from '../../redux/actions/ticketActions'

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

const TicketCard = (props) => {
  useEffect(()=>{
        props.actions.getTickets()
  },[])
 
  const selectedTicket = ticket => {
    console.log(ticket.id)
    props.actions.getTicket(ticket.id)
  }
 
  return (
    <React.Fragment>
      {props.tickets.map(ticket => (
          <Card key={ticket.id} className="cards" onClick={()=>selectedTicket(ticket)} >
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="body2" component="p" className="date">
                  {ticket.date}  
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {ticket.message}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              delete
            </Button>
            <Button size="small" color="primary">
              Read More
            </Button>
          </CardActions>
        </Card>

      ))}
     
    </React.Fragment>
   

    
  );
}
function mapStateToProps(state){
  return {
    tickets:state.getTicketsReducer,
    ticket:state.getTicketReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTickets: bindActionCreators(ticketActions.getTickets, dispatch),
      getTicket: bindActionCreators(ticketActions.getTicket,dispatch)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TicketCard);
