import * as CounterActions from './counter'
import * as DogCardActions from './dogCard' 
import * as DogCollectionActions from './dogCollection'
import * as DogTeamActions from './dogTeam'

const ActionCreators = {
    ...CounterActions,
    ...DogCardActions,
    ...DogCollectionActions,
    ...DogTeamActions
}

export default ActionCreators
