import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import back1 from './images/back1.png';


const styles = theme => ({
    back1: {
        position: 'absolute',
        height: '316px',
        width: '277px',
        left: '670px',
        right: '20px',
        top: '150px',
        bottom: '50px',
        backgroundImage: `url('${back1}')`,
        backgroundRepeat  : 'no-repeat',
        boxShadow: '0px - 4px 10px rgba(0, 0, 0, 0.16)',
        borderRadius: '10px',
    },
});

class Back1 extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.back1}></div>
        );
    }
}

Back1.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Back1);