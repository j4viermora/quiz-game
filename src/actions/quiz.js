import axios from "axios";
import { loaded, setLoading } from "./ui";

export const getQuizzes = () => {
    return async (dispatch) => {
        dispatch(setLoading());
        try {
            const { data } = await axios.get(
                "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"
            );

            dispatch(setQuiz(data.results));
            dispatch(loaded());
        } catch (error) {
            console.log(error);
        }
    };
};

export const setMyAnswer = (answer) => {
    return async (dispath, getState) => {
        const { currentQuiz } = getState().QUIZ;
        const goodAnsware = currentQuiz.correct_answer.toLowerCase();
        const myAnswer = answer.toString();

        if (goodAnsware === myAnswer) {
            dispath(
                setCorrectAnswer({
                    ...currentQuiz,
                    isCorrect: true,
                    myAnswer,
                    correct_answer: goodAnsware,
                })
            );
            nextStepHandler(dispath);
        } else {
            dispath(
                setAnswer({
                    ...currentQuiz,
                    isCorrect: false,
                    myAnswer,
                    correct_answer: goodAnsware,
                })
            );
            nextStepHandler(dispath);
        }
    };
};

const nextStepHandler = (dispatch) => {
    setTimeout(() => {
        dispatch(setNextStep());
    }, 1000);
};

const setNextStep = () => ({
    type: "SET_NEXT_STEP",
});

const setCorrectAnswer = (data) => ({
    type: "SET_CORRECT_ANSWER",
    payload: data,
});

const setAnswer = (data) => ({
    type: "SET_ANSWER",
    payload: data,
});

export const setCurrentQuiz = (quiz) => ({
    type: "SET_CURRENT_QUIZ",
    payload: quiz,
});

const setQuiz = (data) => ({
    type: "GET_QUIZZES",
    payload: data,
});
