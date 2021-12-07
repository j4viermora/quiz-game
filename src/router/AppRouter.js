import { isModalClose } from "actions/ui";
import Footer from "components/Footer";
import Modal from "components/Modal";
import NavBar from "components/NavBar";
import RulesComponent from "components/RulesComponent";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function AppRouter() {
    const {
        UI: { isModalOpen },
    } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => dispatch(isModalClose())}
                >
                    <RulesComponent />
                </Modal>
                <Routes>
                    {routes.map(({ path, component: Component }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={<Component />}
                        />
                    ))}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}
