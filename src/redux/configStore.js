//configStore.js
import { createStore, combineReducers } from "redux";
import users from "./modules/users";
import image from "./modules/image";

// root 리듀서를 만들어줍니다.
// 나중에 리듀서를 여러개 만들게 되면 여기에 하나씩 추가해주는 거예요!
const rootReducer = combineReducers({ users, image });

// 스토어를 만듭니다.
export const store = createStore(rootReducer);

export default store;