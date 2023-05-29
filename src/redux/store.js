import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { Todoreducer } from './reducer'
import { tabreducer } from './Tabreducer'
const reducer = combineReducers({
    Todos:Todoreducer,
    CurrentTab:tabreducer
})

const middleware = [thunk]
const store = createStore(
 reducer,
 composeWithDevTools(applyMiddleware(...middleware))

)


export default store