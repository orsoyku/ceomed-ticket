import * as actionTypes from './actionTypes'

export const selectTicket = (ticket) => {
        return {
            type:actionTypes.SELECT_TICKET,payload:ticket
        }
}