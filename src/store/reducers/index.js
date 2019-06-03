import { combineReducers } from "redux";
import CounterReducer from './counter'
import DogCardReducer from './dogCard'

const rootReducer = combineReducers({
    CounterReducer,
    DogCardReducer
})

export default rootReducer