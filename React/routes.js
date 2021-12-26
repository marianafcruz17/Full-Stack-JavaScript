import React from 'react';
import {BrowserRouter,Switch,Router} from 'react-router-dom';
import PlanetsScreen from './planets_screens';
import PlanetScreen from './planet_screen';
import NotFoundScreen from './not_found_screen';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Router exact path='/' component={PlanetsScreen}/>
            <Router exact path='/planet_screen/:id' component={PlanetScreen}/>
            <Router path='*'>
                <NotFoundScreen/>
            </Router>
        </Switch>
    </BrowserRouter>
)

export default Routes;