import React from "react";

export default function Loader() {
    return (
        <progress className="progress is-link" max="100">
            30%
        </progress>
    );
}
