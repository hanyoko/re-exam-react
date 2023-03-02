import React, { useReducer } from 'react';

const Counter = () => {
    function reducer(state, action){
        switch(action.type){
            case "increase":
                return state+1;
            case "decrease":
                return state-1;
            default:
                return state;
        }
    }
    const [number, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({type:"increase"})
    }
    const onDecrease = () => {
        dispatch({type:"decrease"})
    }
    return (
        <div>
            <p>{number}</p>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
};

export default Counter;