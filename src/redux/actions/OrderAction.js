import {ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAIL} from "../constants/Constants";
import Axios from "../../axios/Axios";

export const OrderAction = () => async (dispatch) => {
    debugger;
    try {
        dispatch({ type: ORDER_LIST_REQUEST })
        const { data } = await Axios.get('/api/v1/order', {
            headers: {
                'x-auth': `${(localStorage.getItem('token'))}`
            }
        })
        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload: data.data
        });
    } catch (error) {
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
