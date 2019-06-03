import * as types from './action-types'

export const randomDog = (payload) => {
    return {
        type: types.RANDOM,
        payload: payload
    }
}