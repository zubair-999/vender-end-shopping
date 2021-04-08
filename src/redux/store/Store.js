import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { SignupReducer } from '../reducers/SignupReducer';
import {SigninReducer} from "../reducers/SigninReducer";
import {ProductReducer} from "../reducers/ProductReducer";
import {
    ProductAddReducer,
    ProductDeleteReducer,
    ProductEditReducer,
    ProductUpdateReducer
} from "../reducers/ProductFunReducer";
import {OrderReducer} from "../reducers/OrderReducer";



const reducer = combineReducers({
    userSignup: SignupReducer,
    userSignin: SigninReducer,
    productList: ProductReducer,
    productAdd: ProductAddReducer,
    prodEdit: ProductEditReducer,
    prodUpdate: ProductUpdateReducer,
    prodDelete: ProductDeleteReducer,
    orderList: OrderReducer,
})
const userInfoFromStorage = localStorage.getItem('token')
const middleware = [thunk]
const initialState = {
    userSignin: { token: userInfoFromStorage }
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
