import type { NextComponentType } from 'next';

import { Container } from './styles';

const Header: NextComponentType = () => {
  return (
    <Container>
      <h1><a href=''>OLLERT</a></h1>
    </Container>
  );
}

export default Header;