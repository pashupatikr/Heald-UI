import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';


export default function SubHeader() {
    return (
        <div>
           <div className="sub-header">
               <DehazeIcon style={{ fontSize: 25, float: 'left', color: 'white' , paddingTop: '7px',paddingLeft: '10px'}} />
               <div style={{ fontSize: 14,  color: 'white', paddingTop: '10px', fontFamily: "Arial,sans-serif"}}>
               <span style={{ float: 'left', paddingLeft: '7px', fontWeight: 'bolder'}}>All</span>
               <span style={{ float: 'left', paddingLeft: '17px'}} >Today's Deals</span>
               <span style={{ float: 'left', paddingLeft: '17px'}}>Customer Service</span>
               <span style={{ float: 'left', paddingLeft: '17px'}}>Gift cards</span>
               <span style={{ float: 'left', paddingLeft: '17px'}}>Registry</span>
               <span style={{ float: 'left', paddingLeft: '17px'}}>Sell</span>
               </div>
               </div>
        </div>
    )
}
