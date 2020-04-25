import {
  REMOVE_USER,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  SEARCH_USER,
} from "./types";
import * as api from "../../../../server/api";

export const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: {
    id,
    loading: false,
  },
});

export const searchUser = (keywords) => ({
  type: SEARCH_USER,
  payload: {
    keywords,
  },
});

export const fectchUsers = () => async (dispatch) => {
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
