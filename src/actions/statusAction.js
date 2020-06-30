import { SET_STATUS} from './type';
export const setStatus = (data) => (dispatch) => {
    dispatch ({
        type : SET_STATUS,
        payload : data,

    });
}