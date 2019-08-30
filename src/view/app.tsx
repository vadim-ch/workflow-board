import * as React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import Board from './containers/board';
import { Wrapper } from './components/wrapper';

const store = configureStore();

const App: React.FC = () => {
  return (
      <Provider store={store}>
        <Wrapper>
          <Board/>
        </Wrapper>
      </Provider>
  );
};

export default App;
