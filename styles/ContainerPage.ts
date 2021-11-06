import styled from 'styled-components';

import Themes from './Themes';

const ContainerPage = styled.div`
  background-color: ${Themes.dark.background};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
`;

export default ContainerPage;