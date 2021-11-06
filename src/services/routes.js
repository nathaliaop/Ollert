import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Board from '../components/Board';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <Board />} />
        </Switch>
    </BrowserRouter>
);

export default Routes;