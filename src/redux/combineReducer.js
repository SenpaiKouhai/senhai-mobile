import { combineReducers } from 'redux'
import reducer from './reducer'
import searchReducer from './search/searchReducer'
import settingsReducer from './settings/settingsReducer'
import userPreferences from './userPreferences/userPreferences'
import historyReducer from './history/historyReducer'

const combineReducer = combineReducers({
    settings: reducer,
    search: searchReducer,
    userSettings: settingsReducer,
    userPref: userPreferences,
    history: historyReducer
})

export default combineReducer