import styled, { css } from 'styled-components';

import Themes from '../../services/themes';

export const Container = styled.div`
  position: relative;
  background: #FFFFFF;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor: grab;
  background-color: ${Themes.dark.background};

  header {
    position: absolute;
    top: -22px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
    color: ${Themes.dark.grey600}
  }

  ${props => props.isDragging && css`
    border: 2px dashed rgba(0, 0, 0, 0.2);
    padding-top: 31px;
    border-radius: 0;
    background: transparent;
    box-shadow: none;
    cursor: grabbing;

    p, img, header {
      opacity: 0;
    }
  `}
`;

export const Label = styled.label`
  width: 10px;
  height: 10px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
`;