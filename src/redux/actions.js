import { v4 as uuidv4 } from "uuid";

import { SET_USER } from "./types";

export const setUser = (username, password) => ({
  type: SET_USER,
  payload: {
    id: uuidv4(),
    username,
    password,
  },
});
