import { TYPES } from "constants/types";

const initialState = {
    isLoading: false,
    isError: false,
    errorMessage: "",
    isSuccess: false,
    successMessage: "",
    isModalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.setLoading:
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case TYPES.loadeDone:
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
            };
        case TYPES.isModalOpen:
            return {
                ...state,
                isModalOpen: true,
            };
        case TYPES.isModalClose:
            return {
                ...state,
                isModalOpen: false,
            };

        default:
            return state;
    }
};
