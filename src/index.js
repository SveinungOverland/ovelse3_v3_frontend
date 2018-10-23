import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';


// Project imports
import Navigation from './navigation';
import Dashboard from './dashboard';




const routing = (
    <MuiThemeProvider theme={theme}>
        <Navigation>
            <BrowserRouter>
                <Switch>
                        <Route exact path='/' component={ Dashboard } />
                </Switch>
            </BrowserRouter>
        </Navigation>
    </MuiThemeProvider>
);
ReactDOM.render(routing, document.getElementById('root'));
