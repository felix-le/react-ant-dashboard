import { SET_USER } from "./types";

export const setUser = (username, password) => ({
  type: SET_USER,
  payload: {
    id: Math.random(),
    username,
    password,
  },
});
