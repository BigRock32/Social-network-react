import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
   sideBar: sidebarReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store


