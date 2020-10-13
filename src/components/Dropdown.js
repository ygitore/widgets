import React, { Fragment, useState } from 'react'

const Dropdown = ({colors}) => {
    const [selectedColor, setSelectedColor] = useState("")
   
    const renderedColors = colors.map((c, index)=>{
        return <option key={c.color} value={c.color}>{c.color}</option>
    })
    const onColorSelection = (e) => {
        if(e.target.value !== "0"){
            setSelectedColor(e.target.value)
        }
    }
    return (
        <Fragment>
            <select onChange={onColorSelection}>
                <option value="0">Select color</option>
                {renderedColors}
            </select>
            <br />
            {selectedColor}
        </Fragment>
    )
}

export default Dropdown
