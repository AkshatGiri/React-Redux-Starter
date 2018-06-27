import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import './App.css';
import reducers from './reducers';
import Counter from './components/Counter/Counter';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider >
    );
  }
}

export default App;
