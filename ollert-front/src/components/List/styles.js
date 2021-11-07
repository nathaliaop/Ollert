import styled from 'styled-components';

import Themes from '../../services/themes';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 320px;

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
      color: ${Themes.dark.grey500};
    }

    button {
      width: 42px;
      height: 42px;
      border-radius: 18px;
      border: 0;
      cursor: pointer;
      cursor: pointer;
      color: #8A2387;
      background: #BB86FC;
      background: -webkit-linear-gradient(to right, #F27121, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #F27121, #E94057, #8A2387); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      background-position: right center;
      background-size: 400% auto;
      transition: background-position 700ms ease-out;

      &:hover {
        background-position: left center;
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;