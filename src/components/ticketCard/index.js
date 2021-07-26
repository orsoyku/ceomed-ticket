import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as ticketActions from '../../redux/actions/ticketActions'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const TicketCard = (props) => {
  useEffect(()=>{
        props.actions.getTickets()
  })
 
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              {props.tickets.length}  
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
  );
}
function mapStateToProps(state){
  return {
    tickets:state.getTicketsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getTickets: bindActionCreators(ticketActions.getTickets, dispatch)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TicketCard);
