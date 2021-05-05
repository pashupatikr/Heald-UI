import zIndex from '@material-ui/core/styles/zIndex'
import React from 'react'
import CheckBoxWithText from '../Tools/CheckBoxWithText'
import FiveStarRating from '../Tools/FiveStarRating'
import PrimaryText from '../Tools/PrimaryText'
import RadioButtonWithText from '../Tools/RadioButtonWithText'
import SecondaryText from '../Tools/SecondaryText'
import ProductCard from '../Widgets/Card/ProductCard'
import ProductCardForMultiImg from '../Widgets/Card/ProductCardForMultiImg'
import ProductSlide from '../Widgets/Card/ProductSlide'
import Footer from '../Widgets/Footer'
import MainHeader from '../Widgets/MainHeader'
import SlideShow from '../Widgets/SlideShow'
import SubHeader from '../Widgets/SubHeader'
import Title from '../Widgets/Title'


export default function Home() {
 
    return (
        <div>
         <div>
         <MainHeader></MainHeader>
          <SubHeader></SubHeader>
          <SlideShow></SlideShow> 
         </div>
          <div  style={{ 
            height:"auto",
            width:"99%",
            paddingRight: "15px",
            paddingLeft: "15px",
            overflow:"hidden" 
          }}>
            <ProductCard  ></ProductCard>
            <ProductCard  ></ProductCard>
            <ProductCard  ></ProductCard>   
            <ProductCard  ></ProductCard> 
            <ProductCardForMultiImg></ProductCardForMultiImg>
            <ProductCardForMultiImg></ProductCardForMultiImg>
            <ProductCardForMultiImg></ProductCardForMultiImg>
            <ProductCardForMultiImg></ProductCardForMultiImg> 
          {/* <Title titletext="Heald"> </Title>
          <PrimaryText data="Multi Range" ></PrimaryText>   
          <SecondaryText data="Multi Range" ></SecondaryText>   
          <RadioButtonWithText data="Multi Range" ></RadioButtonWithText> 
          <CheckBoxWithText data="Get it in 2 days"></CheckBoxWithText> 
          <FiveStarRating></FiveStarRating>  */}
          </div>
          <div>
          <ProductSlide></ProductSlide>
          <ProductSlide></ProductSlide>
          </div>          <div  style={{ 
            height:"auto",
            width:"99%",
            paddingRight: "15px",
            paddingLeft: "15px",
            overflow:"hidden" 
          }}> 
            <ProductCardForMultiImg></ProductCardForMultiImg>
            <ProductCardForMultiImg></ProductCardForMultiImg>
            <ProductCardForMultiImg></ProductCardForMultiImg>
            <ProductCardForMultiImg></ProductCardForMultiImg> 
          </div>
          <div>
          <Footer></Footer>
          </div>
        </div>
    )
}
