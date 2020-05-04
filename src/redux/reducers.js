import {
  SET_USER,
  CHECK_USER,
  FETCH_LOCAL_USER_START,
  FETCH_LOCAL_USER_SUCCESS,
  FETCH_LOCAL_USER_ERROR,
} from "./types";
const initialState = {
  visibleUsersRedux: [],
  initUsersRedux: [],
  loading: false,
  error: false,
  keywords: "",
  users: [
    {
      id: 1,
      email: "test@gmail.com",
      username: "1",
      password: "1",
      phone: 1,
      prefix: "84",
      website: "",
    },
  ],
  matchData: false,
  user: {},
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
    // ----------------------------------------------------------------
    case FETCH_LOCAL_USER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_LOCAL_USER_SUCCESS: {
      return {
        ...state,
        users: [...state, action.payload],
      };
    }
    case FETCH_LOCAL_USER_ERROR: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    // ----------------------------------------------------------------
    // BEGIN NEED TO HELP
    case CHECK_USER: {
      const { username, password } = action.payload.values; //gia tri trả về từ input
      console.log("OUTPUT: reducers -> password", password);
      console.log("OUTPUT: reducers -> username", username);
      console.log("OUTPUT: reducers -> Users", state.users); //(gia tri tra ve tu localstorage)
      return {
        ...state,
        user: state.users.map(
          (user) => user.username === username && user.password === password
        ),
      };
    }
    // END
    default:
      return state;
  }
};
export default reducers;
