import NavBar from "components/NavBar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </>
    );
}
