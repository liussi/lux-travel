import styled from 'styled-components';
import img1 from '../../assets/image1.svg';
import img2 from '../../assets/image2.svg';
import img3 from '../../assets/image3.svg';
import diamond from '../../assets/Vector.svg';


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
    top: 278px;
    left: 1px;
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
    top: 350px;
    left: 1px;
    width: 1440px;
    height: 612px;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: contain;
     z-index: 3;
  }

 
  
`;
export const OverlayImg3 = styled.span`
  position: absolute;
  top: 513px;
  left: -34px;
  width: 1691px;
  height: 419px;
  background-image: url(${img3});
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 5;
  pointer-events: none;
`;

export const Subtitle = styled.p`
  font-size: 25px;
  letter-spacing:7.5px;
  white-space:pre;
margin-bottom: 60px;
margin-top: 0;
 z-index: 4;

  span{
  display:block;}
`;

export const Title = styled.h1`
  font-size: 198px;
  font-weight: 400;
  color: white;
margin: 0 0;
position: relative; 
  z-index: 2;
 span{
  display:block;
  margin: 0;
  padding:0;
line-height: 129px;
letter-spacing: 8px;
position: relative;
 }
   
`;

export const TitleOverlayWord = styled.div`
  font-size: 142px;
  line-height: 142px;
  letter-spacing: 6px;
  color: white;
  position: relative;
  z-index: 4;
`;



export const SvgDiamond = styled.span<{
  $top: number;
  $left: number;
  $width: number;
  $height: number;
}>`
  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: ${({ $left }) => `${$left}px`};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  background-image: url(${diamond});
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 10;
`;
