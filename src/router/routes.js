import { HomePage, QuizPage, QuizResult } from "pages";

export const PATHS = {
    HOME: "/",
    QUIZ: "/quiz",
    QUIZ_RESULT: "/quiz/result",
};

export const routes = [
    {
        path: PATHS.HOME,
        component: HomePage,
        exact: true,
    },
    {
        path: PATHS.QUIZ,
        component: QuizPage,
        exact: true,
    },
    {
        path: PATHS.QUIZ_RESULT,
        component: QuizResult,
        exact: true,
    },
];
