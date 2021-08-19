import * as actionTypes from './actionTypes'

export const filterBySubject = (ticket) => {
    return {type:actionTypes.FILTER_BY_SUBJECT,payload:ticket}

}