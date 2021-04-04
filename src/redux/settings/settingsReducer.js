import { AUTO_FULLSCREEN, HEADER_BACK_PRESSED } from './action'

const initialState = {
    autoFullscreen: false,
    headerBackPressed: false
}

const settingsReducer = async ( state = initialState, action ) => {
    switch(action.type) {
        case AUTO_FULLSCREEN:
            return {
                ...state,
                autoFullscreen: action.payload
            }
        case HEADER_BACK_PRESSED:
            return {
                ...state,
                headerBackPressed: action.payload
            }
        default:
            return state
    }
}

export default settingsReducer