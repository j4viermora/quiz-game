import { TYPES } from "constants/types";

const initialState = {
    quizzes: [],
    currentStep: 1,
    totalSteps: 0,
    currentQuiz: {},
    myAnswers: [],
    success: "pending",
    answered: false,
    loading: false,
    startTime: null,
    endTime: null,
};

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.getQuizzes:
            return {
                ...state,
                currentStep: 1,
                quizzes: action.payload,
                totalSteps: action.payload.length,
                currentQuiz: action.payload[0],
                myAnswers: initialState.myAnswers,
                startTime: new Date().getTime(),
            };
        case TYPES.setCurrentStep:
            return {
                ...state,
                currentStep: action.payload,
                answerred: false,
            };
        case TYPES.setCorrectAnswer:
            return {
                ...state,
                myAnswers: [...state.myAnswers, action.payload],
                success: "ok",
                answered: true,
                loading: true,
            };
        case TYPES.setAnswer:
            return {
                ...state,
                myAnswers: [...state.myAnswers, action.payload],
                success: "fail",
                answered: true,
                loading: true,
            };
        case TYPES.setNextStep:
            return {
                ...state,
                currentStep: state.currentStep + 1,
                success: "pending",
                answered: false,
                currentQuiz: state.quizzes[state.currentStep],
                loading: false,
            };
        case TYPES.setEndTime:
            return {
                ...state,
                endTime: new Date().getTime(),
            };
        default:
            return state;
    }
};
