import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';
import Translate from './components/Translate';

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
    label:'red',
    val:'red'
  },
  {
    label:'yellow',
    val:'yellow'
  },
  {
    label:'blue',
    val:'blue'
  },
  {
    label:'green',
    val:'green'
  }
]

const App = () => {
  const [color, setColor] = useState("")
  
  return (
    <div className="App">
      <Dropdown label="select color" selected = {color} onOptionChange = {setColor} options={colors} />
      <Accordion questions = {questions} />
      <Translate />
    </div>
  );
}

export default App;
