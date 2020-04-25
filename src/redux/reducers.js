import { SET_USER } from "./types";
const initialState = {
  data: [],
  visibleUsersRedux: [],
  initUsersRedux: [],
  loading: false,
  error: false,
  keywords: "",
  users: {},
};

let newObjectUser = {};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      const { id, username, password } = action.payload;
      if (!newObjectUser[id]) {
        newObjectUser[id] = {
          id,
          username,
          password,
        };
      } else {
        newObjectUser = {
          ...newObjectUser[id],
          ...action.payload,
        };
      }

      return {
        ...state,
        users: newObjectUser,
      };
    }
    //------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;
