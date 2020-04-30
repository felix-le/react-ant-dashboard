import axios from "axios";

export const apiFetchUsers = async () => {
  return axios.get('../db.json');
};
