import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import { Provider } from 'react-redux';
import configureStore from './store/store';


const App: React.FC = () => {
  
  return (
    <Provider store={configureStore()}>
      <Routes />
    </Provider>
  );
}

export default App;
