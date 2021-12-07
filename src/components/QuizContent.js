import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import ReactHtmlParser from "react-html-parser";

// personal imports
import selectOption from "assets/images/select_options.png";
import voting from "assets/images/voting.png";
import election from "assets/images/election.png";
import { setEndTime, setMyAnswer } from "actions/quiz";
import { PATHS } from "router/routes";

export default function QuizContent({
    question,
    category,
    difficulty,
    currentStep,
    totalSteps,
    loading,
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [illustration, setIllustration] = useState(voting);
    const handleClick = (response) => {
        dispatch(setMyAnswer(response));
        if (currentStep === totalSteps) {
            navigate(PATHS.QUIZ_RESULT);
            dispatch(setEndTime());
        }
        if (currentStep >= 3) {
            setIllustration(election);
            if (currentStep >= 6) {
                setIllustration(selectOption);
            }
        }
    };

    return (
        <div className="p-5">
            <h2 className="has-text-weight-bold is-size-4 mb-3 is-flex is-align-items-center">
                {category}
                {difficulty === "easy" && (
                    <span className="tag is-primary ml-3">
                        {difficulty.toLocaleUpperCase()}
                    </span>
                )}
                {difficulty === "medium" && (
                    <span className="tag is-warning ml-3">
                        {difficulty.toLocaleUpperCase()}
                    </span>
                )}
                {difficulty === "hard" && (
                    <span className="tag is-danger ml-3">
                        {difficulty.toLocaleUpperCase()}
                    </span>
                )}
            </h2>
            <figure className="image">
                <img src={illustration} alt="voting" />
            </figure>
            <p>{ReactHtmlParser(question)}</p>
            {currentStep <= totalSteps && (
                <div className="my-5 is-flex is-justify-content-center">
                    <button
                        className="button is-link"
                        disabled={loading}
                        onClick={() => handleClick(true)}
                    >
                        Yes
                    </button>
                    <span className="mx-1" />
                    <button
                        className="button is-danger"
                        disabled={loading}
                        onClick={() => handleClick(false)}
                    >
                        No
                    </button>
                </div>
            )}
            <div className="my-5 is-flex is-justify-content-center">
                <p className="has-text-weight-bold">
                    {currentStep}
                    {"/"}
                    {totalSteps}
                </p>
            </div>
        </div>
    );
}
