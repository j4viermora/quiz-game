import Container from "layout/Container";
import React from "react";

// Personal Imports

import QuizContent from "components/QuizContent";
import Section from "layout/Section";
import { useSelector } from "react-redux";
import FeedBackResult from "components/FeedBackResult";
import { Helmet } from "react-helmet";
import Loader from "components/Loader";

export function QuizPage() {
    const { isLoading } = useSelector((state) => state.UI);
    const { quizzes, currentStep, totalSteps, success, answered, loading } =
        useSelector((state) => state.QUIZ);

    return (
        <>
            <Helmet>
                <title>Quiz</title>
            </Helmet>
            <Section>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Container>
                        {answered && <FeedBackResult success={success} />}
                        <QuizContent
                            {...quizzes[currentStep - 1]}
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                            loading={loading}
                        />
                    </Container>
                )}
            </Section>
        </>
    );
}
