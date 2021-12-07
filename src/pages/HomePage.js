import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";

// Personal imports

import Container from "layout/Container";
import { PATHS } from "router/routes";
import Section from "layout/Section";
import Welcome from "components/Welcome";
import FormName from "components/FormName";
import SelectDifficultty from "components/SelectDifficultty";

export function HomePage() {
    const navigate = useNavigate();
    const {
        QUIZ: { currentStep },
        USER: {
            user: { name },
        },
    } = useSelector((state) => state);

    useEffect(() => {
        if (currentStep >= 10) {
            navigate(PATHS.QUIZ_RESULT);
        }
    }, [currentStep, navigate]);

    return (
        <>
            <Helmet>
                <title>Welcome to quiz</title>
            </Helmet>
            <Section>
                <Container className="p-6">
                    <Welcome />
                    <SelectDifficultty className="mr-3" />
                    {!name ? (
                        <FormName />
                    ) : (
                        <button
                            className="button is-link"
                            onClick={() => navigate(PATHS.QUIZ)}
                        >
                            Start
                        </button>
                    )}
                </Container>
            </Section>
        </>
    );
}
