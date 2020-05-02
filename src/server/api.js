import data from "../db.json";

export const apiFetchUsers = async () => {
  // return axios.get("http://localhost:4000/results");
  return data;
};

export const getLocalUsers = async () => {
  const readDataLocalStorage = JSON.parse(
    window.localStorage.getItem("persist:root")
  );
  if (Object.keys(readDataLocalStorage).length > 0) {
    const localUsers = JSON.parse(readDataLocalStorage.appReducers).users
      ? JSON.parse(readDataLocalStorage.appReducers).users
      : {};
    return localUsers;
  }
};
