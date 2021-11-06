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

  h1 {
    cursor: pointer;
    font-family: "Poppins";
    font-size: 1.2em;
    font-weight: 900;
    max-width: 12em;
    margin: 0;
    color: #8A2387;
    -webkit-text-fill-color: transparent;
    background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-position: right center;
    background-size: 400% auto;
    background-clip: text;
    -webkit-background-clip: text;
    transition: background-position 1000ms ease-out;
  }

  h1:hover {
    background-position: left center;
  }
`;