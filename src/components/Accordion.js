import React from 'react'

const Accordion = ({questions}) => {
    const renderedItems = questions.map(item=>{
        return <div className="ui accordion">
                    <div className="active title">
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className="active content">
                        <p>{item.content}</p>
                    </div>
                </div>
    })
    return (
        <div>
            {renderedItems}
        </div>
    )
}

export default Accordion
