import {combineReducers} from "redux";
import getTicketsReducer from "./getTicketsReducer";
import getTicketReducer from "./getTicketReducer";
import filterBySubjectReducer from "./filterBySubjectReducer";
const rootReducer = combineReducers({
    getTicketsReducer,
    getTicketReducer,
    filterBySubjectReducer
})


export default rootReducer;