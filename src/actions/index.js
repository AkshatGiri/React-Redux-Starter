import {COUNTER_DECREMENT, COUNTER_INCREMENT} from './types';

export const counterDecrement = () => (
    {
        type: COUNTER_DECREMENT ,
        // no payload needed
    }
);

export const counterIncrement = () => (
    {
        type: COUNTER_INCREMENT ,
    }
);