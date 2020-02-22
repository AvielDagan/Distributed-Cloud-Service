import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import picture from './images/pic.png';


const styles = theme => ({
    pic: {
        position: 'absolute',
        left: '670px',
        right: '20px',
        top: '150px',
        bottom: '50px',
        backgroundImage: `url('${picture}')`,
        backgroundRepeat  : 'no-repeat',
        boxShadow: '0px - 4px 10px rgba(0, 0, 0, 0.16)',
        borderRadius: '10px',
    },
});

class Pic extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.pic}></div>
        );
    }
}

Pic.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Pic);