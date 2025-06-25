import styled from 'styled-components';
import sky from '../../assets/sky.svg';

export const LayoutWrapper = styled.div`
  position: relative;
  width: 1440px;
  height: 960px;
  top: -42px;
  background-image: url(${sky});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
`;
