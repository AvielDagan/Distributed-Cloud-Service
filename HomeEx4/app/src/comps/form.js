import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const styles = theme => ({
    formBox: {
        position: 'absolute',
        width: '362px',
        height: '378px',
        left: '187px',
        top: '272px',
        background: 'rgba(23, 25, 50, 0.6)',
        boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
        borderRadius: '10px',
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '80px',
    },
    id: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        top: '20px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize : '20px',
    },
    title: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize : '20px',
    },
    body: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        bottom: '185px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize : '20px',
    },
    userId: {
        background: 'white',
        position: 'absolute',
        width: '321px !important',
        height: '140px !important',
        bottom: '25px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize : '20px',
    },
    AddCircleIcon: {
        position: 'absolute',
        width: '54px',
        height: '54px',
        top: '350px',
        color: '#FD5842',
    },
});

class Form extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
    }

    addItem(event) {
        event.preventDefault();
        this.props.onAdd(
            this.titleValue.value,
            this.bodyValue.value,
        );
        this.idValue.value = "";
        this.titleValue.value = "";
        this.bodyValue.value = "";
        this.userIdValue.value = "";
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.formBox}>
                <form
                    onSubmit={this.addItem}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                >
                    <input
                        className={classes.id}
                        variant="outlined"
                        placeholder="ID"
                        ref={idValue => (this.idValue = idValue)}
                    />
                    <input
                        className={classes.title}
                        variant="outlined"
                        placeholder="TITLE"
                        ref={titleValue => (this.titleValue = titleValue)}
                    />
                    <input
                        className={classes.body}
                        variant="outlined"
                        placeholder="BODY"
                        ref={bodyValue => (this.bodyValue = bodyValue)}
                    />
                    <textarea
                        className={classes.userId}
                        variant="outlined"
                        placeholder="USER ID"
                        ref={userIdValue => (this.userIdValue = userIdValue)}
                    />
                    <AddCircleIcon
                        className={classes.AddCircleIcon}
                        type="submit"
                        onClick={this.addItem}
                    />
                </form>
            </div>
        );
    }
}

Form.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);