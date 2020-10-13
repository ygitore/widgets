import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';

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
const colors = [
  {
    color:'red',
    id:1
  },
  {
    color:'blue',
    id:2
  },
  {
    color:'yellow',
    id:3
  },
  {
    color:'white',
    id:4
  }
]
const App = () => {
  return (
    <div className="App">
      <Dropdown colors={colors} />
      <Accordion questions = {questions} />
    </div>
  );
}

export default App;
