import {COUNTER_DECREMENT, COUNTER_INCREMENT} from '../actions/types';

const INITIAL_STATE = { value: 42}

export default ( state = INITIAL_STATE, action ) => {
    switch(action.type){
        case COUNTER_DECREMENT:
            return { ...state, value: state.value - 1}
        case COUNTER_INCREMENT: 
            return { ...state, value: state.value + 1}
        default:
            return state;
    }
}