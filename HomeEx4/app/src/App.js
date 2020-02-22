import React, { Component } from 'react';
import './App.css';
import backgroundImg from './background.png';
import 'typeface-roboto';
import Form from './comps/form';
import Pic from './comps/pic';
import Back1 from './comps/back1';
import Back2 from './comps/back2';
import Back3 from './comps/back3';
import FolderList from './comps/list';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import axios from "axios";

const styles = theme => ({
  appBody: {
    background: '#FD5842',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  projTitle: {
    position: 'absolute',
    left: '695px',
    marginTop: '50px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '26px',
    lineHeight: '30px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  backgroundImg: {
    position: 'absolute',
    width: '1400px',
    height: '700px',
    left: '100px',
    top: '164px',
    backgroundImage: `url('${backgroundImg}')`,
    border: '1px #171932',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },

});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const items = res.data;
      this.setState({ items });
    });
  }

  onAdd(title, body) {
    axios.post(`https://jsonplaceholder.typicode.com/posts`, { title, body })
      .then(res => {
        this.setState({ items: [...this.state.items, res.data] })
      })
      .catch(err => console.errpr(err));
  }

  onDelete(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        this.setState({ items: [...this.state.items.filter(item => item.id !== id)] })
      })
      .catch(res => console.error(res));
  }

  onEditSubmit(id, title, body, userId) {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      id: id,
      title: title,
      body: body,
      userId: userId,
    })
      .then(res => this.setState(prevState => ({
        items: prevState.items.map(
          item => item.id !== res.data.id ? item : res.data
        )
      })))
      .catch(err => console.error(err))
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.appBody}>
        <div className={classes.backgroundImg}></div>
        <div className={classes.projTitle}>BOJACK'S PROJECT</div>
        <Form
          onAdd={this.onAdd}
        />
        <Back3 />
        <Back2 />
        <Back1 />
        <Pic />
        <FolderList
          onDelete={this.onDelete}
          onEdit={this.onEdit}
          onChange={this.handleChange}
          items={this.state.items}
          onEditSubmit={this.onEditSubmit}
        />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);