import type { NextComponentType } from 'next';
import CardType from '../../@types/CardType';
import { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './styles';

const lists = loadLists();

const Board: NextComponentType = () => {
  return (
    <Container>
      {lists.map((list): { list: CardType } => <List key={list.title} data={list} />)}
    </Container>
  );
}

export default Board;