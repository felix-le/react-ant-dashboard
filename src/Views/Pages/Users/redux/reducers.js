import {
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
  REMOVE_USER,
  SEARCH_USER,
  USER_DETAIL,
  REMOVE_ALL
} from "./types";
const initialState = {
  visibleUsersRedux: [],
  initUsersRedux: [],
  loading: false,
  error: false,
  keywords: "",
  user: {},
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
      const { email } = action.payload.user;
      const newUsers = state.visibleUsersRedux.filter(user => user.email !== email);

      // array find, findIndex, filter, indexOf, map, reducer

      return {
        ...state,
        visibleUsersRedux: newUsers
        // removeIndex: state.visibleUsersRedux
        //   .map(function (item) {
        //     return item.email;
        //   })
        //   .indexOf(action.payload.user.email),
        // visibleUsersRedux: state.visibleUsersRedux.splice(state.removeIndex, 1),
      };
    }

    case REMOVE_ALL: {
      console.log(action.payload.users);
      return {
        ...state,
        // visibleUsersRedux: ...
      }
    }

    default:
      return state;
  }
};
export default Userreducers;
