//configStore.js
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import users from "./modules/users";
import image from "./modules/image";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

export const history = createBrowserHistory();

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ 
    users : users, 
    router : connectRouter(history), 
});

const middlewares = [thunk.withExtraArgument({ history: history })];

const env = process.env.NODE_ENV;


// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
    const { logger } = require("redux-logger");
    middlewares.push(logger);
  }

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// 스토어를 만듭니다.
let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();