import React, { useState } from "react";
import voting from "assets/images/voting.png";
import election from "assets/images/election.png";
import selectOption from "assets/images/select_options.png";
import { useDispatch } from "react-redux";
import { setMyAnswer } from "actions/quiz";
import { useNavigate } from "react-router";
import { PATHS } from "router/routes";

export default function QuizContent({
    question,
    category,
    difficulty,
    currentStep,
    totalSteps,
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [illustration, setIllustration] = useState(voting);
    const handleClick = (response) => {
        dispatch(setMyAnswer(response));
        if (currentStep === totalSteps) {
            navigate(PATHS.QUIZ_RESULT);
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
                <span className="tag is-warning ml-3">{difficulty}</span>
            </h2>
            <figure className="image">
                <img src={illustration} alt="voting" />
            </figure>
            <p className="has-text-centered">{question}</p>
            {currentStep <= 10 && (
                <div className="my-5 is-flex is-justify-content-center">
                    <button
                        className="button is-link"
                        onClick={() => handleClick(true)}
                    >
                        Yes
                    </button>
                    <span className="mx-1" />
                    <button
                        className="button is-danger"
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
