import React from 'react';
import { Switch, Route } from "react-router-dom";
import CardList from './components/cardList';
import Header from './components/header';
import Dashboard from './pages/Dashboard'
import IconBtn from './components/iconButton/index'
const App = () => {
    return <React.Fragment>
        <Header/>
        <Switch>
            <Route exact path="/" component={CardList}></Route>
            <Route exact path="/homepage" component={Dashboard}></Route>
        </Switch>
        <IconBtn/>
    </React.Fragment>
}


export default App;


