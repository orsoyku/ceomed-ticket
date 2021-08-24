import React from 'react';
import { Switch, Route } from "react-router-dom";
import CardList from './components/cardList';
import Header from './components/header';

import Dashboard from './pages/Dashboard'

const App = () => {
    return <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={CardList}></Route>
            <Route exact path="/homepage" component={Dashboard}></Route>
        </Switch>

    </React.Fragment>
}


export default App;


