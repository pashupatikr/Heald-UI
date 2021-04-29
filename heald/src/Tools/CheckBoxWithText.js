import React from 'react'

export default function CheckBoxWithText({ data }) {
    return (
        <div>
            <input type="checkbox"></input> <span>{data}</span>
        </div>
    )
}
