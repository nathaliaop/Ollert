import styled from 'styled-components';

import Themes from '../../../styles/Themes'; 

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${Themes.dark.background};
  display: flex;
  align-items: center;
  padding-left: 20px;
  color: white;
  font-weight: 700;
  font-size: 24px;
`;