import * as types from '../action/action-types'

const intitialState = {
    current_dog: {
        img : "https://bowwowblogger.files.wordpress.com/2012/12/dog-question-mark-curious.gif",
        atk : ""
    }
}

const DogCardReducer = (state = intitialState, action) => {
    // 'Desempaqueto' el estado actual

    switch (action.type) {
        case types.RANDOM:
            let atks = ["Piedra", "Papel", "Tijera"]
            let api_image = action.payload['img']
            let random_atk = atks[Math.floor(Math.random() * atks.length)]
            return { ...state, current_dog: {atk:random_atk, "img":api_image }}
        default:
            return state
    }

}

export default DogCardReducer