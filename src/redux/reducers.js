import { SET_USER } from "./types";
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
    default:
      return state;
  }
};
export default reducers;
