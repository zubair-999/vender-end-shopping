import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../constants/Constants";
import Axios from '../../axios/Axios';

export const signup = ({ shop_name, email, password }, callback) => async (dispatch) => {
    try {
        dispatch({ type: SIGNUP_REQUEST })
        const { data } = await Axios.post('/shop/signup', { ...shop_name, ...email, ...password })
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: data
        });
        callback();
    } catch (error) {
        dispatch({
            type: SIGNUP_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

}
