import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Personal Imports

import QuizResultItem from "components/QuizResultItem";
import Container from "layout/Container";
import Section from "layout/Section";
import sucess from "assets/images/success.png";
import { PATHS } from "router/routes";
import { Helmet } from "react-helmet";

export function QuizResult() {
    const { myAnswers, totalSteps } = useSelector((state) => state.QUIZ);
    const correctAnswers = myAnswers.filter(
        (answer) => answer.isCorrect === true
    ).length;

    return (
        <>
            <Helmet>
                <title>Quiz Result</title>
            </Helmet>
            <Section>
                <Container>
                    <figure className="image">
                        <img src={sucess} alt="Success" />
                    </figure>
                    <h2 className="mb-5 is-size-4">
                        <span className="has-text-weight-bold">
                            Quiz Result
                        </span>{" "}
                        {correctAnswers}/{totalSteps}
                    </h2>
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
