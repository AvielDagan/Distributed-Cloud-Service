import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import back2 from './images/back2.png';


const styles = theme => ({
    back2: {
        position: 'absolute',
        height: '280px',
        width: '400px',
        left: '655px',
        right: '20px',
        top: '150px',
        bottom: '50px',
        backgroundImage: `url('${back2}')`,
        backgroundRepeat  : 'no-repeat',
        boxShadow: '0px - 4px 10px rgba(0, 0, 0, 0.16)',
        borderRadius: '10px',
    },
});

class Back2 extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.back2}></div>
        );
    }
}

Back2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Back2);