import * as types from './action-types'

export const dogEquip = (payload) => {
    return {
        type: types.EQUIP,
        payload: payload
    }
}