import {
  HeroSection,
  Subtitle,
  Title,
  TitleOverlayWord,
  OverlayImg3,
  SvgDiamond,
} from './HeroSection.styled';

import { ReactComponent as DiamondSVG } from '../../assets/Vector.svg';

const Hero = () => {
  const diamonds = [
    { width: 213, height: 200, top: 375, left: 659 },
    { width: 83, height: 70, top: 451, left: 72 },
    { width: 83, height: 43, top: 310, left: 200 },
    { width: 50, height: 200, top: 480, left: 1160 },
    { width: 50, height: 40, top: 365, left: 1247 },
  ];

  return (
    <HeroSection>
      <Subtitle>
        <span>the</span>
        <span>world’s</span>
        <span>most</span>
      </Subtitle>
      <Title>
        <span>extra</span>
        <span>ordinary</span>
      </Title>
      <TitleOverlayWord>places</TitleOverlayWord>
      <OverlayImg3 />

      {diamonds.map(({ width, height, top, left }, i) => (
  <SvgDiamond
    key={i}
    $top={top}
    $left={left}
    $width={width}
    $height={height}
  />
))}
    </HeroSection>
  );
};

export default Hero;
