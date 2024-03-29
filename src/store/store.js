import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

// local imp
import userReducer from "./reducer/user";
import resources from "./reducer/resources";

// config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["userReducer", "resources"],
};

//  root reducer
const rootReducer = combineReducers({
  userReducer: userReducer,
  resources: resources,
});

const persiReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persiReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
