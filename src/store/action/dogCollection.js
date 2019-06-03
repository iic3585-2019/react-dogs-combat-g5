import * as types from './action-types'

export const catchDog = (payload) => {
    return {
        type: types.CATCH,
        payload: payload
    }
}