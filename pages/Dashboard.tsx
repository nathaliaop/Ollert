import styled from 'styled-components';

import type { NextPage } from 'next';

import ContainerPage from '../styles/ContainerPage';

import Header from '../src/components/Header';
import Column from '../src/components/Column';

const Dashboard: NextPage = () => {
  return (
    <>
      <Header />
      <ContainerPage>
        <Column>Col1</Column>
        <Column>Col2</Column>
        <Column>Col3</Column>
      </ContainerPage>
    </>
  );
}

export default Dashboard;