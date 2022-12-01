import { combineReducers } from 'redux'
import { ApiLoadingStatus } from '../constants'
import {FETCH_USERS, FETCH_USERS_ERROR, FETCH_USERS_SUCCESS} from './actions'

const defaultState = {
    fetch: {
        loadingStatus: ApiLoadingStatus.NOT_STARTED
    },
    users: []
}

const usersReducer = (state = defaultState, action) => {
    switch (action.type){
        case FETCH_USERS:
            return {...state, fetch: {loadingStatus: ApiLoadingStatus.STARTED}}
        
        case FETCH_USERS_SUCCESS:
            return {...state, fetch: {loadingStatus: ApiLoadingStatus.SUCCESS}, users: action.payload}
        
        case FETCH_USERS_ERROR:
            return {...state, fetch: {loadingStatus: ApiLoadingStatus.FAILED, error:action.payload}}
        
    }
    
    return state
}

export default usersReducer;