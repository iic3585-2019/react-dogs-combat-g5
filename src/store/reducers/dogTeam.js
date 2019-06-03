import * as types from '../action/action-types'

export const intitialState = {
    team:{
        first:{
            img : "https://media.metrolatam.com/2019/02/06/spike-5072eced958e531d0dea3d60488dc94d-600x400.jpg",
            atk : ["Piedra", "Papel", "Tijera"][Math.floor(Math.random() * 3)]
        },
        second:{
            img : "https://st2.depositphotos.com/2899123/5947/v/950/depositphotos_59476449-stock-illustration-x-red-handwritten-letter.jpg",
            atk : ""
        }
    }
}

const DogTeamReducer = (state = intitialState, action) => {
    // 'Desempaqueto' el estado actual

    switch (action.type) {
        case types.EQUIP:
            const {team} = state
            if(action.payload['type'] === 'first'){
                return { ...state, team:{first: action.payload['change_dog'],second:team.second}}
            }
            else if(action.payload['type'] === 'second'){
                console.log("entre al if")
                return { ...state, team:{second: action.payload['change_dog'],first:team.first}}
            }
            
        default:
            return state
    }

}

export default DogTeamReducer