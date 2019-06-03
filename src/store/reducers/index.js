import { combineReducers } from "redux";
import DogCardReducer from './dogCard'
import DogTeamReducer from './dogTeam'
import DogCollectionReducer from './dogCollection'

const rootReducer = combineReducers({
    DogCardReducer,
    DogTeamReducer,
    DogCollectionReducer
})

export default rootReducer