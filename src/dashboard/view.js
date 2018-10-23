import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// UI imports
import Paper from '@material-ui/core/Paper';

// Project imports
import styles from './styles';

const View = (props) => {
    const { state, classes } = props;

    return (
        <Paper className={classes.root}>

            <h1>Hello world</h1>

        </Paper>
    )
};

View.propTypes = {
    state: PropTypes.object,
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(View);
