import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function getTicketsReducer(state = initialState.tickets,action){
    switch(action.type){
        case actionTypes.GET_TICKETS_SUCCESS:
                return action.payload
        default: //if no action, return initial state
            return state;
    }
}

