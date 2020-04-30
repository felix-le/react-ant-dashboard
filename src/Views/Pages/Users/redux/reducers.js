import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  REMOVE_USER,
  SEARCH_USER,
  USER_DETAIL,
} from "./types";
const initialState = {
  visibleUsersRedux: [],
  initUsersRedux: [],
  loading: false,
  error: false,
  keywords: "",
  user: {},
  removeIndex: "",
};

const Userreducers = (state = initialState, action) => {
  switch (action.type) {
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
        error: true,
        loading: false,
      };
    }

    //------------------------------------------------------------
    case USER_DETAIL: {
      return {
        ...state,
        user: action.payload,
      };
    }
    // ----------------------------------------------------------------
    case REMOVE_USER: {
      console.log(action.payload.userRemove.email);
      return {
        ...state,
        removeIndex: state.visibleUsersRedux
          .map(function (item) {
            return item.email;
          })
          .indexOf(action.payload.userRemove.email),
        visibleUsersRedux: state.visibleUsersRedux.splice(state.removeIndex, 1),
      };
    }

    default:
      return state;
  }
};
export default Userreducers;
