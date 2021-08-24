import {combineReducers} from "redux";
import getTicketsReducer from "./getTicketsReducer";
import getTicketReducer from "./getTicketReducer";
import filterBySubjectReducer from "./filterBySubjectReducer";
import newTicketStatusReducer from "./newTicketStatusReducer";
const rootReducer = combineReducers({
    getTicketsReducer,
    getTicketReducer,
    filterBySubjectReducer,
    newTicketStatusReducer
})


export default rootReducer;