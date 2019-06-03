import * as types from './action-types'

export const incrementCounter = (payload) => {
    return {
        type: types.INCREMENT,
        payload: payload
    }
}

export const decrementCounter = (payload) => {
    return {
        type: types.DECREMENT,
        payload: payload
    }
}