import actionTypes from '../actions/actionTypes';

const initialState = {
    history: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.SAVE:
            return {
                history: state.history.concat({
                    id: new Date(),
                    value: action.value
                })
            }  

        default:
            return state
    }

}

export default reducer;