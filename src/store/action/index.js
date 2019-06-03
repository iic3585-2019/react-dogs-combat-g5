import * as CounterActions from './counter'
import * as DogCardActions from './dogCard' 

const ActionCreators = {
    ...CounterActions,
    ...DogCardActions
}

export default ActionCreators
