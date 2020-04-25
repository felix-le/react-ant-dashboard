import {
  SET_USER,
  REMOVE_USER,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  SEARCH_USER,
} from "./types";
const initialState = {
  data: [],
  visibleUsersRedux: [],
  initUsersRedux: [],
  loading: false,
  error: false,
  keywords: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    //------------------------------------------------------------

    case REMOVE_USER: {
      return {
        ...state,
        visibleUsersRedux: state.visibleUsersRedux.filter((user) => {
          return user.id !== action.payload.id;
        }),
      };
    }
    //------------------------------------------------------------
    case FETCH_USER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        visibleUsersRedux: action.payload.data,
        initUsersRedux: action.payload.data,
        loading: false,
      };
    }
    case FETCH_USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    //------------------------------------------------------------
    case SEARCH_USER: {
      return {
        ...state,
        keywords: action.payload.keywords,
        visibleUsersRedux: state.initUsersRedux.filter(
          (user) => user.name.toLowerCase().indexOf(state.keywords) !== -1
        ),
        loading: false,
      };
    }
    //------------------------------------------------------------
    default:
      return state;
  }
};
export default reducers;
