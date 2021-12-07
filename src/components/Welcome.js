import React from "react";
import question from "assets/images/question.png";

export default function Welcome() {
    return (
        <>
            <h1 className="is-size-3 mb-3 has-text-weight-bold has-text-centered">
                Welcome to quiz game
            </h1>
            <img src={question} alt="Welcome" />
            <p className="has-text-weight-normal mb-3">
                This is a simple quiz game. You can play it with your friends.
            </p>
            <p className="my-3">
                We will present you with a series of questions about technology.
                You must answer the questions correctly to win
            </p>
            <p className="mb-3 is-size-5">You are ready?</p>
        </>
    );
}
