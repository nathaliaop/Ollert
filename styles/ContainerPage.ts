import styled from 'styled-components';

import Themes from './Themes';

const ContainerPage = styled.div`
  background-color: ${Themes.dark.background};
  width: 100%;
  height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default ContainerPage;