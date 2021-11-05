import { ReactNode } from 'react';

import type { NextComponentType } from 'next';
import BoardType from '../../@types/BoardType';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';

const List: NextComponentType = ({ data, children }: { data: BoardType, children?: ReactNode }) => {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#FFFFFF' />
          </button>
        )}
      </header>

      <ul>
        { data.cards.map((card, index): {card: any, index: number} => <Card key={card.id} index={index} data={card} />) }
      </ul>
    </Container>
  );
}

export default List;