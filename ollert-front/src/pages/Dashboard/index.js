import Header from '../../components/Header';
import Board from '../../components/Board';

import { Container } from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Header />
            <Board />
        </Container>
    );
}

export default Dashboard;