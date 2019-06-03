import { createStore, applyMiddleware, compose } from "redux"

// Se importan los reducers
import rootReducer from './reducers'

// MiddleWare imports
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(
            logger
        )
    )
)

export default store
