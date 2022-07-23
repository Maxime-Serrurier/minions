import actionTypes from './actionTypes';


export const saveMinions = (value) => {
    return {
        type: actionTypes.SAVE,
        value: value
    };
};