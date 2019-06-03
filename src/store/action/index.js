import * as DogCardActions from './dogCard' 
import * as DogCollectionActions from './dogCollection'
import * as DogTeamActions from './dogTeam'

const ActionCreators = {
    ...DogCardActions,
    ...DogCollectionActions,
    ...DogTeamActions
}

export default ActionCreators
