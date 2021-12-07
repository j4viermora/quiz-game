import { TYPES } from "constants/types";

const initialState = {
    user: {
        name: window.localStorage.getItem("name") || null,
        idioma: window.navigator.language || "es",
        isTutotial: window.localStorage.getItem("isTutotial") || false,
    },
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.setUser:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
