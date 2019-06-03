import { combineReducers } from "redux";
import CounterReducer from './counter'
import DogCardReducer from './dogCard'
import DogTeamReducer from './dogTeam'
import DogCollectionReducer from './dogCollection'

const rootReducer = combineReducers({
    CounterReducer,
    DogCardReducer,
    DogTeamReducer,
    DogCollectionReducer
})

export default rootReducer