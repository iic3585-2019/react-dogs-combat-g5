import * as types from '../action/action-types'

const intitialState = {
    current_number: 0
}

const CounterReducer = (state = intitialState, action) => {
    // 'Desempaqueto' el estado actual
    let { current_number } = state

    switch (action.type) {
        case types.INCREMENT:
            return { ...state, current_number: current_number + action.payload['amount'] }
        case types.DECREMENT:
            return { ...state, current_number: current_number + action.payload['amount'] }
        default:
            return state
    }

}

export default CounterReducer