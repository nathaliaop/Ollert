import type { NextComponentType } from 'next';
import CardType from '../../@types/CardType';

import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import { Container, Label } from './styles';

const Card: NextComponentType = ({ data, index }: { data: CardType, index: number }) => {
  const ref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const ItemTypes = {
    CARD: 'CARD',
  };

  type DragObject = {
    name: string,
    type: string,
    index: number,
    isDragging: boolean,
  }

  const [{ isDragging }, dragRef] = useDrag({
    type: 'string',
    item: { type: 'CARD', index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: [ItemTypes.CARD],
    hover(item: DragObject, monitor) { // passar card por cima de outro
      console.log(item.index);
      console.log(index);
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        { data.labels.map((label: string) => <Label key={label} color={label} />) }
      </header>

      <p>{data.content}</p>

    </Container>
  );
}

export default Card;