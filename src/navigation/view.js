import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


// UI imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MenuIcon from '@material-ui/icons/Menu';


// Project imports
import styles from './styles';

const View = (props) => {
    const { state, classes } = props;

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar}>
                <Toolbar variant="dense">
                    <IconButton color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Photos
                    </Typography>
                </Toolbar>
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
