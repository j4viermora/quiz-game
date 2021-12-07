import { combineReducers } from "redux";
import { quizReducer } from "./quizReducer";
import { uiReducer } from "./uiReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
    UI: uiReducer,
    QUIZ: quizReducer,
    USER: userReducer,
});
