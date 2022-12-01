import { combineReducers } from "redux";
import  usersReducer  from "../app/store/reducer";

const rootReducer = combineReducers({
    usersState: usersReducer
})

export default rootReducer;