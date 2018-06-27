import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import reducers from './reducers';
import Counter from './components/Counter/Counter';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="App">
          <Counter />
        </div>
      </Provider >
    );
  }
}

export default App;
