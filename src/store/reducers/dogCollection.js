import * as types from '../action/action-types'
import * as dogTeam from './dogTeam'

const intitialState = {
    collection:[
        {
            img:"https://media.metrolatam.com/2019/02/06/spike-5072eced958e531d0dea3d60488dc94d-600x400.jpg",
            atk: dogTeam.intitialState.team.first.atk
        }
    ]
}

const DogTeamReducer = (state = intitialState, action) => {
    // 'Desempaqueto' el estado actual

    switch (action.type) {
        case types.CATCH:
            console.log("heee"+action.payload['current_dog'].img)
            let {collection} = state
            return {...state, collection: [...collection, action.payload['current_dog']]}
        default:
            return state
    }

}

export default DogTeamReducer