import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// UI imports
import AppBar from '@material-ui/core/AppBar';


// Project imports
import styles from './styles';

const View = (props) => {
    const { state, classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                <h1>Hello world</h1>
            </AppBar>
            <main className={classes.main}>
                { props.children }
            </main>
        </div>
    )
};


View.propTypes = {
    state: PropTypes.object,
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
};

export default withStyles(styles)(View);
