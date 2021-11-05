import CardType from './CardType';

type BoardType = {
    title: string,
    creatable: boolean,
    cards: Array<CardType>,
}

export default BoardType;