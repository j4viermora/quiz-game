import React from "react";
import question from "assets/images/question.png";
import styles from "styles/Custom.module.css";
import { useDispatch } from "react-redux";
import { isModalOpen } from "actions/ui";

export default function Welcome() {
    const dispatch = useDispatch();
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
                You must answer the questions correctly to win{" "}
                <span
                    className={styles.view_more}
                    onClick={() => dispatch(isModalOpen())}
                >
                    view all rules
                </span>
            </p>
            <p className="mb-3 is-size-5">You are ready?</p>
        </>
    );
}
