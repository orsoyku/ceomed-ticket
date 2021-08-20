import * as actionsTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function filterBySubjectReducer(state=initialState.searchedWord,action){
    switch(action.type){
        case actionsTypes.FILTER_BY_SUBJECT:
            return action.payload
        default:
            return state;
}
}