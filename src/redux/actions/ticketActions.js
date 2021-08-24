import * as actionTypes from './actionTypes'

export function getTicketsSuccess(tickets) {
  return { type: actionTypes.GET_TICKETS_SUCCESS, payload: tickets }
}

export function getTicketSuccess(ticket) {
  return { type: actionTypes.GET_TICKET_SUCCESS, payload: ticket }
}

export function getTickets() {
  return function (dispatch) {
    let url = "http://localhost:3000/tickets";
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getTicketsSuccess(result)));
  };
}

export function getTicket(id) {
  return function (dispatch) {
    let url = "http://localhost:3000/tickets";
    if (id) {
      url = url + "?id=" + id
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getTicketSuccess(result)));
  };
}

export function newTicketStatus(status) {
  return { type: actionTypes.NEW_TICKET_STATUS, payload: status }
}