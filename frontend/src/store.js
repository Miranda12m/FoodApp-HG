import { legacy_createStore as mamaHuevo, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducer } from './reducers/productReducers' 

const reducer = combineReducers({
    productList : productListReducers,
    productDetails: productDetailsReducer
})

const initialState = {}

const middleware = [thunk]

const store = mamaHuevo(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middleware)))

export default store