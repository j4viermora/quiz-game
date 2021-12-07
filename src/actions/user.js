const { TYPES } = require("constants/types");

export const setUser = (user) => ({
    type: TYPES.setUser,
    payload: user,
});
