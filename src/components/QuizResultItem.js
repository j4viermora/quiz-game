import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import { colors } from "styles/theme";

export default function QuizResultItem({ question, isCorrect }) {
    return (
        <>
            {isCorrect ? (
                <div className="is-flex">
                    <span className="icon mr-1">
                        <AiFillCheckCircle color={colors.primary} />
                    </span>
                    <p>{question.trim()}</p>
                </div>
            ) : (
                <div className="is-flex">
                    <span className="icon mr-1">
                        <AiFillCloseCircle color={colors.danger} />
                    </span>
                    <p>{question}</p>
                </div>
            )}
            <hr />
        </>
    );
}
