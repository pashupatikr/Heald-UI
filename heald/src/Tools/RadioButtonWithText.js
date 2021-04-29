import React from 'react'

export default function RadioButtonWithText({ data }) {
    return (
        <div>
            <input type="radio" ></input><span className="secondary-text">{data}</span>
        </div>
    )
}
