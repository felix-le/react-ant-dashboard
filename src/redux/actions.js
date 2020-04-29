import { v4 as uuidv4 } from "uuid";

import { SET_USER } from "./types";

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
