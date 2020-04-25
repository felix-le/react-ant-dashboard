import axios from "axios";

export const apiFetchUsers = async () => {
  return axios.get("https://randomuser.me/api/?page=1&results=5");
};
