import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getTicketReducer(state = initialState.ticket,action){
    switch(action.type){
        case actionTypes.GET_TICKET_SUCCESS:
                return action.payload
        default: //if no action, return initial state
            return state;
    }
}

