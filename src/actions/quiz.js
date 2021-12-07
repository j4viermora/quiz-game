import axios from "axios";
import { TYPES } from "constants/types";
import { loaded, setLoading } from "./ui";

export const getQuizzes = (difficultty = "easy") => {
    return async (dispatch) => {
        const limit = 11;
        dispatch(setLoading());
        try {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=${limit}&difficulty=${difficultty}&type=boolean`
            );

            dispatch(setQuizzes(data.results));
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
    type: TYPES.setNextStep,
});

const setCorrectAnswer = (data) => ({
    type: TYPES.setCorrectAnswer,
    payload: data,
});

const setAnswer = (data) => ({
    type: TYPES.setAnswer,
    payload: data,
});

export const setCurrentQuiz = (quiz) => ({
    type: TYPES.setCurrentQuiz,
    payload: quiz,
});

const setQuizzes = (data) => ({
    type: TYPES.getQuizzes,
    payload: data,
});

export const setEndTime = () => ({
    type: TYPES.setEndTime,
});
