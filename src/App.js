// Librairie
import React, { useReducer } from "react";

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return { 
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state;
    };
};

function App() {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ backgroundColor: 'white', padding: '30px' }}>
            <h1>Compteur</h1>
            <div>Total: { state.count }</div>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
        </div>
    );
}

export default App;