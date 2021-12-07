import { TYPES } from "constants/types";

export const setLoading = () => {
    return {
        type: TYPES.setLoading,
    };
};

export const loaded = () => ({
    type: TYPES.loadeDone,
});

export const isModalOpen = () => ({
    type: TYPES.isModalOpen,
});

export const isModalClose = () => ({
    type: TYPES.isModalClose,
});
