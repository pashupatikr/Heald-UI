import zIndex from '@material-ui/core/styles/zIndex'
import React from 'react'
import CheckBoxWithText from '../Tools/CheckBoxWithText'
import FiveStarRating from '../Tools/FiveStarRating'
import PrimaryText from '../Tools/PrimaryText'
import RadioButtonWithText from '../Tools/RadioButtonWithText'
import SecondaryText from '../Tools/SecondaryText'
import ProductCard from '../Widgets/Card/ProductCard'
import MainHeader from '../Widgets/MainHeader'
import SlideShow from '../Widgets/SlideShow'
import SubHeader from '../Widgets/SubHeader'
import Title from '../Widgets/Title'


export default function Home() {
 
    return (
        <div>
          <MainHeader></MainHeader>
          <SubHeader></SubHeader>
          <SlideShow></SlideShow>

          <div  style={{
            border: "2px solid red", 
            marginTop:"-440px",
            zIndex:"220022",
            position:"absolute",
            height:"100%",
            width:"99%"
            
          }}>
            <ProductCard  ></ProductCard>
            <ProductCard  ></ProductCard>
            <ProductCard  ></ProductCard>
            <ProductCard  ></ProductCard>
          {/* <Title titletext="Heald"> </Title>
          <PrimaryText data="Multi Range" ></PrimaryText>   
          <SecondaryText data="Multi Range" ></SecondaryText>   
          <RadioButtonWithText data="Multi Range" ></RadioButtonWithText> 
          <CheckBoxWithText data="Get it in 2 days"></CheckBoxWithText> 
          <FiveStarRating></FiveStarRating>  */}
          </div>
        </div>
    )
}
