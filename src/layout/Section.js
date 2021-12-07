import React from "react";

export default function Section({ children }) {
    return (
        <section className="section is-flex is-justify-content-center">
            {children}
        </section>
    );
}
