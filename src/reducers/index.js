import { combineReducers } from "redux";
import contacts from "./contactReducer";

export default combineReducers({
    contactsState: contacts
})