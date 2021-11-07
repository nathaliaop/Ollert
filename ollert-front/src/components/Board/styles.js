import styled from 'styled-components';

import Themes from '../../services/themes';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  height: calc(100% - 60px);
  background-color: ${Themes.dark.surface};
`;