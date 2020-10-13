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
const lang = [
  {
    label:"afrikaans",
    val:'af'
  },
  {
    label:"arebic",
    val:'ar'
  },
  {
    label:"hindi",
    val:'hi'
  },
  {
    label:"amharic",
    val:'am'
  },
  {
    label:"english",
    val:'en'
  }
]
const App = () => {
  const [selectedLang, setSelectedLang] = useState("")
  return (
    <div className="App">
      <Dropdown colors={colors} />
      <Accordion questions = {questions} />
      <Translate setSelectedLang={setSelectedLang} options={lang}/>
      {
        selectedLang
      }
    </div>
  );
}

export default App;
