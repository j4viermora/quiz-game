const initialState = {
    isLoading: false,
    isError: false,
    errorMessage: "",
    isSuccess: false,
    successMessage: "",
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false,
            };
        case "LOADE_DONE":
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
            };

        default:
            return state;
    }
};
