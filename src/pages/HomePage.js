import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

// Personal imports

import Container from "layout/Container";
import { PATHS } from "router/routes";
import Section from "layout/Section";
import Welcome from "components/Welcome";
import FormName from "components/FormName";
import { Helmet } from "react-helmet";

export function HomePage() {
    const navigate = useNavigate();
    const { currentStep } = useSelector((state) => state.QUIZ);

    useEffect(() => {
        if (currentStep >= 10) {
            navigate(PATHS.QUIZ_RESULT);
        }
    }, [currentStep, navigate]);

    return (
        <>
            <Helmet>
                <title>Welcome</title>
            </Helmet>
            <Section>
                <Container className="p-6">
                    <Welcome />
                    <FormName />
                </Container>
            </Section>
        </>
    );
}
