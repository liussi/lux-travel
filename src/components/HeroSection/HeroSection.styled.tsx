import styled from 'styled-components';
import sky from '../../assets/sky.svg';
import img1 from '../../assets/image1.svg';
import img2 from '../../assets/image2.svg';
import img3 from '../../assets/image3.svg';

export const HeroSection = styled.section`
  padding: 40px 0;
  text-align: center;
 position: relative;
  width: 100%;
  height: 600px; 
  text-transform:uppercase;
 

  &::before {
    content: '';
    position: absolute;
    top: 354px;
    width: 1440px;
    height: 687px;
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 433.8px;
    left: -54.07px;
    width: 1520px;
    height: 612.22px;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
  }

 
  span.overlay-img3 {
    position: absolute;
    top: 589px;
    left: -215px;
    width: 1691px;
    height: 419px;
    background-image: url(${img3});
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 3;
    pointer-events: none;
  }
`;


export const Subtitle = styled.p`
  font-size: 25px;
  font-weight: 400;
  letter-spacing:7.5px;
  white-space:pre;
margin-bottom: 60px;
margin-top: 0;


  span{
  display:block;}
`;

export const Title = styled.h1`
  font-size: 198px;
  font-weight: 400;
  line-height: 1.2;
  color: white;
margin: 0 0;
 span{
  display:block;
  margin: 0;
  padding:0;
line-height: 1;

  }

`;