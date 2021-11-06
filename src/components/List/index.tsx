import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import type { NextComponentType } from 'next';
import BoardType from '../../@types/BoardType';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';
import CardType from '../../@types/CardType';

type Props = {
  data: BoardType,
}

const List: React.FC<Props> = ({ data }) => {
  return (
      <PerfectScrollbar 
        style={{height: 'calc(100vh - 120px)', width: '100%'}}
        onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}
      >
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
            { data.cards.map((card, index) => <Card key={card.id} data={card} index={index} />) }
          </ul>
        </Container>
      </PerfectScrollbar>
  );
}

export default List;