import React from "react";

export default function Column({ is = "", children }) {
    return <div class={`column ${is}`}>{children}</div>;
}
