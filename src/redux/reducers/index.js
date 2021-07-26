import {combineReducers} from "redux";
import getTicketsReducer from "./getTicketsReducer";
import getTicketReducer from "./getTicketReducer";

const rootReducer = combineReducers({
    getTicketsReducer,
    getTicketReducer
})


export default rootReducer;