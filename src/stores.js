import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// import reducers
import appReducers from "./redux/reducers";

// config persist
const persisConfig = {
  key: "root",
  storage,
};

// config reducers

const allReducers = {
  appReducers,
};

const reducers = combineReducers({
  ...allReducers,
});
const persistedReducer = persistReducer(persisConfig, reducers);

let stores = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

let persistor = persistStore(stores);
export { stores, persistor };
