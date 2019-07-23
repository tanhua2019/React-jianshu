import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyled } from './style.js';
import Header from './common/header'

import Home from './page/home'
import Detail from './page/detail'
function App() {
  return (
    <div>
      <GlobalStyled />
      <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
