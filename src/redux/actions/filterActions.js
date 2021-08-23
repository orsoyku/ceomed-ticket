import * as actionTypes from './actionTypes'

export const filterBySubject = (word) => {
    return {type:actionTypes.FILTER_BY_SUBJECT,payload:word}

}