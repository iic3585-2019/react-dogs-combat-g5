import * as CounterActions from './counter'
import * as DogCardActions from './dogCard' 
import * as DogCollectionActions from './dogCollection'

const ActionCreators = {
    ...CounterActions,
    ...DogCardActions,
    ...DogCollectionActions
}

export default ActionCreators
