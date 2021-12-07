import React from "react";

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { colors } from "styles/theme";

export default function FeedBackResult({ success }) {
    return (
        <div className=" is-flex is-justify-content-center">
            {success === "ok" && (
                <AiFillCheckCircle color={colors.primary} size={100} />
            )}
            {success === "fail" && (
                <AiFillCloseCircle color={colors.danger} size={100} />
            )}
        </div>
    );
}
