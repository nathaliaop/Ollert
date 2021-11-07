import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { MdAdd } from 'react-icons/md';
import { Container } from './styles';

import Card from '../Card';

const List = ({ data }) => {
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
      <PerfectScrollbar 
        style={{height: 'calc(100vh - 160px)', width: '100%'}}
        onScrollY={container => console.log(`scrolled to: ${container.scrollTop}.`)}
      >
      <ul>
        { data.cards.map((card, index) => <Card key={card.id} data={card} index={index} />) }
      </ul>
      </PerfectScrollbar>
    </Container>
  );
}

export default List;