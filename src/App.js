import React from 'react';
import './App.css';
import Accordion from './components/Accordion';

const questions = [
  {
    title:'what is react?',
    content:'react is front end javascript framework'
  },
  {
    title:'how to create project in react?',
    content:'in windows terminal or bash type npx create-react-app your app name'
  },
  {
    title:'list some of hooks in react?',
    content:'useState, useRef, useEffect,..'
  }
]
const App = () => {
  return (
    <div className="App">
      <Accordion questions = {questions} />
    </div>
  );
}

export default App;
