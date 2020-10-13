import React, { useState } from 'react'

const Translate = ({setSelectedLang, options}) => {
    const [text, setText] = useState("")
    const [lang, setLang] = useState("")
    const renderedOptions = options.map(option=><option key={option.val}>{option.label}</option>)
    const onSelectOption = (e) => {
        setLang(e.target.value)
        setSelectedLang(e.target.value)
    }
    return (
        <div>
            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="enter text"/>
            <select onChange={onSelectOption}>
                <option>Select language</option>
                {renderedOptions}
            </select>
        </div>
    )
}

export default Translate
