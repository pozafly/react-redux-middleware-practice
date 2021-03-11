import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer, { rootSaga } from './modules';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'; // 사가 임포트

const customHistory = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어를 만든다.

const store = createStore(
  rootReducer,
  // logger를 사용하는 경우, logger가 가장 마지막에 와야 한다.
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      sagaMiddleware, // 사가 미들웨어 적용하고,
      logger
    )
  )
);

sagaMiddleware.run(rootSaga); // 루트 사가를 실행해주자.
// 주의 : 스토어 생성이 된 다음에 위 코드를 실행해야 함.

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
