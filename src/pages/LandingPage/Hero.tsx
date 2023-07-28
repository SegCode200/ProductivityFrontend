import React from 'react'
import { styled } from 'styled-components'
import {PiStarFourFill} from "react-icons/pi"
import {CiInboxOut} from "react-icons/ci"
import {AiOutlineLineChart} from "react-icons/ai"
import {FaVectorSquare} from "react-icons/fa"
import img from "../../assets/green-wash.jpg"
import img1 from "../../assets/isisi.jpg"

const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Top>
                    <BigText>Mangerial Optimization for your company</BigText>
                    <Div>
                        <Icon/>
                        <SmallText>
                            Choose Efficiency or flexibility for your organization, reconstruction of your team will lead to improved productivity, collaboration and higher business performance.
                        </SmallText>
                        <div>
                        <Icon2/>
                        <Icon3/>
                        <Icon4/>

                        </div>
                    </Div>

                </Top>
                <Bottom>
                    <Div1>
                        <Card>
                            <SmallText1>Our mission is to make your team efficient and flexible to achieve great result</SmallText1>
                        </Card>
                        <Card1>
                            <BigText1>350%</BigText1>
                            <SmallText1 style={{fontSize: "13px"}}>Average Annual growth rate among our client</SmallText1>
                        </Card1>

                    </Div1>
                    <Div2>
                        <div style={{display:"flex", flexDirection: "column", marginTop: "90px", marginBottom: "30px"}}>
                        <Button bg=''>Get Started</Button>
                        <Button bg='kk'>Try now</Button>
                        </div>
                        <ImageHolder>
                            <Image src={img}/>

                            
                        </ImageHolder>

                    </Div2>
                    <Div3>
                        <Icon1/>
                        <Card>
                            <SmallText1>Our mission is to make your team efficient and flexible to achieve great result</SmallText1>
                        </Card>
                        <Holder>
                            <Image1 src={img1}/>
                        </Holder>

                    </Div3>

                </Bottom>
            </Main>
        </Container>
    </div>
  )
}

export default Hero
const Image1 = styled.img`
width: 100%;
border-radius: 40px;
`
const Holder = styled.div`
width: 250px;
padding: 0 10px;
display: flex;
align-items: flex-end;


`
const Icon1 = styled.div``
const Div3 = styled.div`
display: flex;
align-items: flex-end;
`
const Image = styled.img`
width: 100%;
border-radius: 40px;
`
const ImageHolder = styled.div`
width: 300px;
padding: 0 10px;
height: 300px;

`
const Button = styled.button<{bg?:string}>`
margin: 5px 0;
color: black;
padding: 10px 30px;
border-radius: 20px;
background-color: ${({bg})=> bg ? "#EEEEEE" : "#DAFF8C"};
border: 0;
outline: none;
font-weight: 500;
font-family: Figtree;
cursor: pointer;
transition: all 350ms;
:hover{
  transform: scale(1.09);
}

`
const Div2 = styled.div`
display: flex;
align-items: center;
flex-direction: column;
height: 300px;
justify-content: flex-end;

`
const BigText1 = styled.div`
font-size: 40px;
font-weight: 400;
`
const Card1 = styled.div`
width: 100px;
padding: 0 10px;
height: 200px;
border-radius: 30px;
background-color: #EEEEEE;
display:flex;
flex-direction: column;
align-items: center;
color: black;
justify-content: center;
margin: 0 10px;
`
const SmallText1 = styled.div`
text-align: center;
`
const Card = styled.div`
width: 200px;
padding: 0 10px;
height: 300px;
border-radius: 30px;
background-color: #C7D8B7;
display:flex;
align-items: center;
color: black;
justify-content: center;
`
const Div1 = styled.div`
display: flex;
align-items: flex-end;
`
const Bottom = styled.div`
width: 100%;
display: flex;
align-items: flex-end;
justify-content: space-between;
margin-top: 90px;
`
const Icon4 = styled(FaVectorSquare)`
/* width: 30px;
height: 30px; */
font-size: 14px;
padding: 5px;
background-color: black;
border-radius: 50%;
color: white;
position: absolute;
bottom: 40px;
right: 0;

`
const Icon3 = styled(AiOutlineLineChart)`
/* width: 30px;
height: 30px; */
font-size: 17px;
color: white;
padding: 5px;
background-color: #014736;
border-radius: 50%;
position: absolute;
bottom: 20px;
right: 20px;
`
const Icon2 = styled(CiInboxOut)`
/* width: 30px;
height: 30px; */
font-size: 20px;
padding: 5px;
background-color: #E4FCB2;
border-radius: 50%;
position: absolute;
bottom: -10px;
right: 40px;
`
const Icon = styled(PiStarFourFill)`
/* width: 30px;
height: 30px; */
font-size: 20px;
padding: 5px;
background-color: #E4FCB2;
border-radius: 50%;
`
const SmallText = styled.div`
width: 50%;
color: #5f5c5c;
font-size: 16px;
font-weight: 300;
text-align: center;
margin-top: 10px;
`
const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
position: relative;


`
const BigText = styled.div`
font-size: 50px;
font-weight: 500;
width: 60%;
text-align: center;
`
const Top = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Main = styled.div`
display: flex;
align-items: center;
/* justify-content: center; */
width: 90%;
height: 100%;
flex-direction: column;

`
const Container = styled.div`
width: 100%;
height: calc(100vh - 80px );
background-color: #FDFDFD;
display: flex;
align-items: center;
justify-content: center;
`