import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { getAllUserReducer, UserSigninReducer, UserSignupReducer} from './reducers/UserReducer'
import {getProductByIdReducer, getAllProductReducer} from './reducers/ProductReducer'
import { CartReducer} from './reducers/CartReducer'


const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : undefined,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  }
};

const reducer = combineReducers({
  users: getAllUserReducer,
  userSignin: UserSigninReducer,
  userSignup: UserSignupReducer,

  allProduct: getAllProductReducer,
  getProductById: getProductByIdReducer,
  cart: CartReducer,


});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;