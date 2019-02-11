import reducer from './reducer.js'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const appReducer = combineReducers({ quiz: reducer })
const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed:true }))
const store = createStore(appReducer, middleware)

export default store;
