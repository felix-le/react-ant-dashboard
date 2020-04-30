import {
  REMOVE_USER,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  SEARCH_USER,
  USER_DETAIL,
} from "./types";
import * as api from "../../../../server/api";

export const fetchUsers = () => async (dispatch) => {
  dispatch({
    type: FETCH_USER_START,
  });
  try {
    const res = await api.apiFetchUsers();
    const data = res.data;
    dispatch({
      type: FETCH_USER_SUCCESS,
      payload: { data },
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_ERROR,
    });
  }
};

export const detailUser = (userpass) => ({
  type: USER_DETAIL,
  payload: {
    userpass,
  },
});

export const removeUser = (userRemove) => ({
  type: REMOVE_USER,
  payload: {
    userRemove,
  },
});
