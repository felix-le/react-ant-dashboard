import { v4 as uuidv4 } from "uuid";
import * as api from "../server/api";
import {
  SET_USER,
  USER_ACTIVE,
  FETCH_LOCAL_USER_START,
  FETCH_LOCAL_USER_SUCCESS,
  FETCH_LOCAL_USER_ERROR,
} from "./types";
// ----------------------------------------------------------------
export const setUser = (email, username, password, phone, prefix, website) => ({
  type: SET_USER,
  payload: {
    id: uuidv4(),
    email,
    username,
    password,
    phone,
    prefix,
    website,
  },
});
// ---------------------------------------------------------------
export const fetchLocalUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_LOCAL_USER_START,
  });
  try {
    const res = await api.getLocalUsers();
    dispatch({
      type: FETCH_LOCAL_USER_SUCCESS,
      payload: { res },
    });
  } catch (err) {
    dispatch({
      type: FETCH_LOCAL_USER_ERROR,
    });
  }
};
// ----------------------------------------------------------------
export const activeUser = (account) => ({
  type: USER_ACTIVE,
  payload: {
    account,
  },
});
