import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import 'typeface-roboto';


const styles = theme => ({
    root: {
        width: '362px',
        height: '378px',
        background: 'rgba(23, 25, 50, 0.6)',
        boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
        borderRadius: '10px',
        overflow: "auto",
        left: '1060px',
        top: '272px',
        position: 'relative',
    },
    editButton: {
        color: 'white',
    },
    deleteButton: {
        color: '#FD5842',
    },
    line: {
        color: 'white',
        width: '361px',
        border: '0.5px solid',
    },
    item: {
        color: 'white'
    },
    formBox: {
        width: '362px',
        height: '378px',
        marginLeft: "1060px",
        marginTop: '272px',
        background: 'rgba(23, 25, 50, 0.6)',
        boxShadow: '0px 4px 14px rgba(23, 25, 50, 0.5)',
        borderRadius: '10px',
        position: 'relative',
    },
    id: {
        background: 'white',
        position: 'relative',
        width: '327px',
        height: '48px',
        left: '15px',
        top: '25px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    },
    title: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        bottom: '240px',
        left: '15px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    },
    body: {
        background: 'white',
        position: 'absolute',
        width: '327px',
        height: '48px',
        left: '15px',
        bottom: '180px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
    },
    userId: {
        background: 'white',
        position: 'absolute',
        width: '321px !important',
        height: '140px !important',
        bottom: '10px',
        top: '205px',
        left: '15px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.15)',
        fontSize: '16px',
        '.TextareaAutosize-input::placeholder': {
            color: 'red',
        },
    },
    AddCircleIcon: {
        position: 'absolute',
        width: '54px',
        height: '54px',
        top: '350px',
        left: '160px',
        color: '#FD5842',
    },
    text: {
        color: 'white',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize : '20px',
        position : 'relative',
    },
});

class FolderList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editingItem: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.selected = "";
        this.deleteItem = this.deleteItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onEdit(event) {
        event.preventDefault()
        this.props.onEditSubmit(
            this.idValue.value,
            this.titleValue.value,
            this.bodyValue.value,
            this.userIdValue.value,
        );
        this.setState({ editingItem: false });
    }

    handleChange() {

    };

    deleteItem() {
        this.props.onDelete(this.selected.id);
    }

    editItem() {
        this.setState({ editingItem: true });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                {
                    this.state.editingItem ? (
                        <form
                            className={classes.formBox}
                            onEdit={this.onEdit}
                        >
                            <input
                                className={classes.id}
                                variant="filled"
                                placeholder="ID"
                                ref={idValue => (this.idValue = idValue)}
                                disabled = "disable"
                                value={this.selected.id}
                            />
                            <input
                                className={classes.title}
                                variant="filled"
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
                                disabled = "disable"
                                value={this.selected.userId}
                            />
                            <AddCircleIcon
                                className={classes.AddCircleIcon}
                                type="submit"
                                onClick={this.onEdit}
                            />
                        </form>
                    ) : (
                            <div className={classes.root}>
                                {
                                    this.props.items.map(item => {
                                        return (
                                            <div>
                                                <List>
                                                    <ListItem >
                                                        <span className={classes.text}>{item.title}</span>
                                                        <ListItemSecondaryAction>
                                                            <IconButton edge="end" aria-label="delete">
                                                                <EditIcon
                                                                    className={classes.editButton}
                                                                    onClick={() => {
                                                                        this.selected = item;
                                                                        this.editItem();
                                                                    }}
                                                                />
                                                            </IconButton>
                                                            <IconButton edge="end" aria-label="delete">
                                                                <DeleteIcon
                                                                    className={classes.deleteButton}
                                                                    onClick={() => {
                                                                        this.selected = item;
                                                                        this.deleteItem();
                                                                    }}
                                                                />
                                                            </IconButton>
                                                        </ListItemSecondaryAction>
                                                    </ListItem>
                                                    <div className={classes.line}></div>
                                                </List>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        )
                }

            </div>
        );
    }
}
FolderList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FolderList);