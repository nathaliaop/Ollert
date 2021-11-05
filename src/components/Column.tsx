import styled from 'styled-components';

import type { NextComponentType } from 'next';

import Themes from '../../styles/Themes'; 

const Container = styled.ul`
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: ${Themes.dark.surface};
  grid-gap: 10%;

  /*border-left: 1px solid ${Themes.dark.background};
  &:first-child {
    border-left: none;
  }*/

`;

const Title = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  justify-content: center;

  color: ${Themes.dark.white};
  font-size: 18px;
  font-family: 'Montserrat';
  font-weight: 500;
  padding: 5% 0;
`;

const Column: NextComponentType = () => { // title
  return (
    <Container>
      <Title>Titulo</Title>
    </Container>
  );
}
  
export default Column;
  