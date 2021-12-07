import React from "react";

export default function RulesComponent() {
    return (
        <>
            <div className="card py-5 px-6">
                <h4 className="is-size-4">Welcome before starting ...</h4>
                <div className="content">
                    <ul>
                        <li>You must answer correctly more than 5 questions</li>
                        <li>You have 3 min to reply</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
