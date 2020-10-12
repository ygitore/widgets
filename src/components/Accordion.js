import React, { useEffect, useState } from 'react'

const Accordion = ({questions}) => {
    const [active, setActive] = useState(null)
    const handleClick = (index) => {
        setActive(index)
    }
    const renderedItems = questions.map((item, index)=>{
        const activ = active === index ? "active":""
        return <div key={item.title} className="ui styled accordion" onClick={() => handleClick(index)}>
                    <div className={`${activ} title`}>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`${activ} content`}>
                        <p>{item.content}</p>
                    </div>
                </div>
    })
    useEffect(() => {
        console.log("first time only"+active)
    })
    return (
        <div>
            {renderedItems}
        </div>
    )
}

export default Accordion
