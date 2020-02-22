import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import back3 from './images/back3.png';


const styles = theme => ({
    back3: {
        position: 'absolute',
        height: '280px',
        width: '400px',
        left: '635px',
        right: '20px',
        top: '150px',
        bottom: '50px',
        backgroundImage: `url('${back3}')`,
        backgroundRepeat  : 'no-repeat',
        boxShadow: '0px - 4px 10px rgba(0, 0, 0, 0.16)',
        borderRadius: '10px',
    },
});

class Back3 extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.back3}></div>
        );
    }
}

Back3.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Back3);