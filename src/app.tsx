import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store'; // Import css modules stylesheet as styles

const store = configureStore();

const App: React.FC = () => {
  return (
      <Provider store={store}>
        апп
      </Provider>
  );
};

export default App;
