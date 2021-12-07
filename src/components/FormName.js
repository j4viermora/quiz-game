import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// Personal imports

import { useForm } from "hooks/useForm";
import { PATHS } from "router/routes";
import { setUser } from "actions/user";

export default function FormName() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { form, handleChange } = useForm({
        name: "",
    });
    const { name } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        window.localStorage.setItem("name", form.name);
        navigate(PATHS.QUIZ);
        dispatch(setUser(form));
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <input
                        type="text"
                        placeholder="Enter your name, please"
                        className="input mb-5"
                        value={name}
                        onChange={handleChange}
                        name="name"
                    />
                    <button
                        type="submit"
                        className="button is-link is-fullwidth"
                    >
                        Start
                    </button>
                </div>
            </form>
        </>
    );
}
