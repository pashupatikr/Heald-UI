import React from 'react'
import ParentText from '../Tools/ParentText'

export default function Title(data) { 
    return (
        <div> 
        <ParentText text={data.titletext }></ParentText>
        </div>
    )
}
