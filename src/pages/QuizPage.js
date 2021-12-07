import Container from "layout/Container";
import React, { useEffect } from "react";

// Personal Imports

import QuizContent from "components/QuizContent";
import Section from "layout/Section";
import { useDispatch, useSelector } from "react-redux";
import { getQuizzes } from "actions/quiz";
import FeedBackResult from "components/FeedBackResult";
import { Helmet } from "react-helmet";

export function QuizPage() {
    const distpatch = useDispatch();
    const { isLoading } = useSelector((state) => state.UI);
    const { quizzes, currentStep, totalSteps, success, answered } = useSelector(
        (state) => state.QUIZ
    );

    useEffect(() => {
        distpatch(getQuizzes());
    }, [distpatch]);

    return (
        <>
            <Helmet>
                <title>Quiz</title>
            </Helmet>
            <Section>
                {isLoading ? (
                    <progress class="progress is-link" max="100">
                        30%
                    </progress>
                ) : (
                    <Container>
                        {answered && <FeedBackResult success={success} />}
                        <QuizContent
                            {...quizzes[currentStep - 1]}
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                        />
                    </Container>
                )}
            </Section>
        </>
    );
}
