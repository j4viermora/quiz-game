import { useState } from "react";

export const useForm = (initialValue = {}) => {
    const [form, setForm] = useState(initialValue);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const resetForm = () => {
        setForm(initialValue);
    };

    return {
        form,
        handleChange,
        resetForm,
    };
};
