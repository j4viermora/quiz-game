import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Personal Imports

import QuizResultItem from "components/QuizResultItem";
import Container from "layout/Container";
import Section from "layout/Section";
import sucess from "assets/images/success.png";
import fail from "assets/images/fail.png";
import { PATHS } from "router/routes";
import { Helmet } from "react-helmet";
import getTotalTime from "utils/getTotalTime";

export function QuizResult() {
    const { myAnswers, totalSteps, startTime, endTime } = useSelector(
        (state) => state.QUIZ
    );
    const correctAnswers = myAnswers.filter(
        (answer) => answer.isCorrect === true
    ).length;
    const isApprove = correctAnswers > 5;
    const totalTime = getTotalTime(endTime, startTime);

    return (
        <>
            <Helmet>
                <title>Quiz Result</title>
            </Helmet>
            <Section>
                <Container className="p-6">
                    {isApprove ? (
                        <h2 className="has-text-centered is-size-3 has-text-weight-bold">
                            Congratulations! You have completed the quiz.
                        </h2>
                    ) : (
                        <h2 className="has-text-centered is-size-3 has-text-weight-bold">
                            Sorry! You have failed the quiz.
                        </h2>
                    )}
                    <figure className="image">
                        <img src={isApprove ? sucess : fail} alt="finally" />
                    </figure>
                    <h3 className="mb-5 is-size-4">
                        <span className="has-text-weight-bold">
                            Quiz Result
                        </span>{" "}
                        {correctAnswers}/{totalSteps} {isApprove ? "😀" : "😢"}
                        <span className="mx-2">Your time: {totalTime}</span>
                    </h3>
                    {myAnswers.map((item, indx) => {
                        return <QuizResultItem {...item} key={indx} />;
                    })}
                    <Link to={PATHS.QUIZ} className="button is-link">
                        Play Again
                    </Link>
                </Container>
            </Section>
        </>
    );
}
