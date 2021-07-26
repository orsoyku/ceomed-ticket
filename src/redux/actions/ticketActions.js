import * as actionTypes from './actionTypes'

export function getTicketsSuccess(tickets){
    return {type:actionTypes.GET_TICKETS_SUCCESS,payload: tickets}
}

export function getTickets() {
    return function(dispatch) {
      let url = "http://localhost:3000/tickets";
      return fetch(url)
        .then(response => response.json())
        .then(result => dispatch(getTicketsSuccess(result)));
    };
  }