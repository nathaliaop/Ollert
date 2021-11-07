import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

const Card = ({ data, index }) => {
  const ref = useRef();

  /*const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  /*
  const [, dropRef] = useDrop({
    accept: [ItemTypes.CARD],
    hover(item, monitor) { // passar card por cima de outro
      console.log(item.index);
      console.log(index);
    }
  });*/

  //dragRef(dropRef(ref));*/

  return (
    <Container isDragging={false} ref={ref}>
      <header>
        { data.labels.map(label => <Label key={label} color={label} />) }
      </header>

      <p>{data.content}</p>

    </Container>
  );
}

export default Card;