import actionTypes from "../actions/actionTypes";

const initialState = {
    minions: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_MINION:
            return {
                minions: state.minions + 1
            }      

        case actionTypes.DESTROY_MINION:
            return {
                minions: state.minions - 1
            }
        
        case actionTypes.CREATE_TEAM:
            return {
                minions: state.minions + action.value
            }
        
        case actionTypes.DESTROY_TEAM:
            return {
                minions: state.minions - action.value
            }

        case actionTypes.AUTO_ENROLL:
            return {
                minions: state.minions + action.value
            }
    
        default:
            return state;
    }
};

export default reducer;
