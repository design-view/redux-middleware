import React from 'react';
import Counter from './Counter';
import { useSelector, useDispatch } from 'react-redux';
import {  decreaseAsync, increaseAsync } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state=> state.counter);
    const dispatch = useDispatch();
    const onIncrease = () => {
        dispatch(increaseAsync());
    }
    const onDecrease = () => {
        dispatch(decreaseAsync())
    }
    return (
        <Counter 
        number={number} 
        onDecrease={onDecrease}
        onIncrease={onIncrease} />
    );
};

export default CounterContainer;