import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import htmlparse from "react-html-parser";

// Personal imports
import { colors } from "styles/theme";

export default function QuizResultItem({ question, isCorrect }) {
    return (
        <>
            <div className="is-flex">
                <span className="icon mr-1">
                    {isCorrect ? (
                        <AiFillCheckCircle color={colors.primary} />
                    ) : (
                        <AiFillCloseCircle color={colors.danger} />
                    )}
                </span>
                <p>{htmlparse(question.trim())}</p>
            </div>
            <hr />
        </>
    );
}
