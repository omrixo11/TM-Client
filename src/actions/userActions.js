// actions/userActions.js

import axios from 'axios';
import { USER_VERIFY_REQUEST, USER_VERIFY_SUCCESS, USER_VERIFY_FAIL } from '../constants/userConstants.js';

export const verifyUser = (verificationCode) => async (dispatch) => {
  try {
    dispatch({ type: USER_VERIFY_REQUEST });

    const { data } = await axios.post(`/api/users/verifyuser/${verificationCode}`);

    dispatch({ type: USER_VERIFY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_VERIFY_FAIL,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
