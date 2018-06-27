import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/';

import styles from './Counter.css';

class Counter extends Component {

    state = { value: 42}

    constructor(props){
        super(props);
        this.decrement.bind(this);
        this.increment.bind(this);
    }

    decrement(){
        this.props.counterDecrement();
    }
    increment(){
        this.props.counterIncrement();
    }

    render(){
        return (
            <div className={styles.counter_container}>
                <button onClick={this.decrement.bind(this)}>-</button>
                <h4>{this.props.value}</h4>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { value: state.counter.value }
}

export default connect(mapStateToProps, { ...actions })(Counter);

