import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import styles from './Login.module.scss';

class Login extends Component {

  redirectToGoogle = () => {
    window.location.href = 'http://localhost:3000/homepage';
  }

  render() {
    return (
      <div className={styles.root}>
        <h1>Bulletin Board</h1>
        <Button variant="contained" color="primary" onClick={this.redirectToGoogle} className={styles.button}>
          Enter bulletin board
        </Button>
      </div>
    );
  }
}

export default Login;
