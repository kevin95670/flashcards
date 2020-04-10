import React from 'react';
import './App.css';
import Card from '../Card/Card';

function App() {
  return (
    <div className="App">
    <Card verso={false}/>
    <Card />
    <Card />
    <Card verso={false}/>
    </div>
  );
}

export default App;
