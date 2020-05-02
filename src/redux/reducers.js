import { SET_USER } from "./types";
const initialState = {
  visibleUsersRedux: [],
  initUsersRedux: [],
  loading: false,
  error: false,
  keywords: "",
  users: [
    // {
    //   id: 1,
    //   email: "test@gmail.com",
    //   username: "test",
    //   password: "test",
    //   phone: 1,
    //   prefix: "84",
    //   website: "",
    // },
  ],
};

// let newObjectUser = {};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    // case SET_USER: {
    //   // const { id, username, password } = action.payload;
    //   // if (!newObjectUser[id]) {
    //   //   newObjectUser[id] = {
    //   //     id,
    //   //     username,
    //   //     password,
    //   //   };
    //   // } else {
    //   //   newObjectUser = {
    //   //     ...newObjectUser[id],
    //   //     ...action.payload,
    //   //   };
    //   // }

    //   // return {
    //   //   ...state,
    //   //   users: newObjectUser,
    //   // };
    //   ...state,
    //   data: [...state.data, action.payload]
    // }
    //------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;
