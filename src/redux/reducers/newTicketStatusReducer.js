import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function newTicketStatusReducer(state = initialState.newTicket,action){
    switch(action.type){
        case actionTypes.NEW_TICKET_STATUS:
                return action.payload
        default: //if no action, return initial state
            return state;
    }
}

