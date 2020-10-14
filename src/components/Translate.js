import React, { useState } from 'react'
import Dropdown from './Dropdown'

const language = [
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
const Translate = ({options}) => {
    const [text, setText] = useState("")
    const [lang, setLang] = useState("")
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="enter text"/>
            <Dropdown 
                label="select language"
                selected={lang}
                onOptionChange={setLang}
                options={language}
            />
        </div>
    )
}

export default Translate
