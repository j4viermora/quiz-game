import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { colors } from "styles/theme";

export default function QuizResultItem({ question, isCorrect }) {
    return (
        <>
            {isCorrect ? (
                <div className="is-flex">
                    <span className="icon">
                        <AiFillCheckCircle color={colors.primary} />
                    </span>
                    <p>{question}</p>
                </div>
            ) : (
                <div className="is-flex">
                    <span className="icon">
                        <AiFillCloseCircle color={colors.danger} />
                    </span>
                    <p>{question}</p>
                </div>
            )}
            <hr />
        </>
    );
}
