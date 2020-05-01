import axios from "axios";

import data from '../db.json';

export const apiFetchUsers = async () => {
  // return axios.get("http://localhost:4000/results");
  return data;
};
