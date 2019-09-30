import React from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import Profile from './components/profile/Profile';

const App: React.FC = () => {
  return (
    <>
    <Counter />
    <Profile />
    </>
  );
}

export default App;
