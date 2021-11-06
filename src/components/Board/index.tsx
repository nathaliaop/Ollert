import type { NextComponentType } from 'next';
import BoardType from '../../@types/BoardType';
import { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './styles';

const lists: Array<BoardType> = loadLists();

const Board: NextComponentType = () => {
  return (
    <Container>
      { lists.map(list => <List key={list.title} data={list} />) }
    </Container>
  );
}

export default Board;