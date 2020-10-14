import React from 'react'

const Dropdown = ({label,selected,onOptionChange,options}) => {

    const renderedColors = options.map((c, index)=>{
        return <option key={c.val} value={c.val}>{c.label}</option>
    })
    const onOptionSelected = (e) => {
        onOptionChange(e.target.value)
    }
    return (
        <>
            <select onChange={onOptionSelected}>
                <option value="0">{label}</option>
                {renderedColors}
            </select>
            <br />
            {selected !== "0" ? selected : ""}
        </>
    )
}

export default Dropdown
