import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

//import { GlobalStyle } from '../styles/GlobalStyle';

import Dashboard from './Dashboard';
import Header from '../src/components/Header';
import Board from '../src/components/Board';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ollert</title>
        <meta name="description" content="Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DndProvider backend={HTML5Backend}>
          <Header />
          <Board />
        </DndProvider>
      </main>
    </>
  )
}

export default Home;
