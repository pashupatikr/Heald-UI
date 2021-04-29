import React from 'react'
import CheckBoxWithText from '../Tools/CheckBoxWithText'
import FiveStarRating from '../Tools/FiveStarRating'
import PrimaryText from '../Tools/PrimaryText'
import RadioButtonWithText from '../Tools/RadioButtonWithText'
import SecondaryText from '../Tools/SecondaryText'
import Title from '../Widgets/Title'


export default function Home() {
    return (
        <div>
          <Title titletext="Heald"> </Title>
          <PrimaryText data="Multi Range" ></PrimaryText>   
          <SecondaryText data="Multi Range" ></SecondaryText>   
          <RadioButtonWithText data="Multi Range" ></RadioButtonWithText> 
          <CheckBoxWithText data="Get it in 2 days"></CheckBoxWithText> 
          <FiveStarRating></FiveStarRating> 
        </div>
    )
}
