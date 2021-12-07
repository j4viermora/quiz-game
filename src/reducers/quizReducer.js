const initialState = {
    quizzes: [],
    currentStep: 1,
    totalSteps: 0,
    currentQuiz: {},
    myAnswers: [],
    success: "pending",
    answred: false,
};

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_QUIZZES":
            return {
                ...state,
                currentStep: 1,
                quizzes: action.payload,
                totalSteps: action.payload.length,
                currentQuiz: action.payload[0],
            };
        case "SET_CURRENT_STEP":
            return {
                ...state,
                currentStep: action.payload,
                answerred: false,
            };
        case "SET_CORRECT_ANSWER":
            return {
                ...state,
                myAnswers: [...state.myAnswers, action.payload],
                success: "ok",
                answered: true,
            };
        case "SET_ANSWER":
            return {
                ...state,
                myAnswers: [...state.myAnswers, action.payload],
                success: "fail",
                answered: true,
            };
        case "SET_NEXT_STEP":
            return {
                ...state,
                currentStep: state.currentStep + 1,
                success: "pending",
                answered: false,
                currentQuiz: state.quizzes[state.currentStep],
            };
        default:
            return state;
    }
};
