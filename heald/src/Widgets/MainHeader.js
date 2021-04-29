import React from 'react'
import logo1 from '../Elements/Image/Logos/ekBajar1.png'
import logo2 from '../Elements/Image/Logos/ekBajar2.png'

export default function MainHeader() {
    return (
        <div>
            <div className="main-header">
                <img style={{height: "60px", width: "60px", float:"left"}} src={logo1} />
                <span style={{fontSize:"25px",color:"#1CABB3", float:"left", marginTop:"12px",marginLeft:'-8px',fontWeight: 'bolder'}}>ekBajar</span>
                </div>
        </div>
    )
}
