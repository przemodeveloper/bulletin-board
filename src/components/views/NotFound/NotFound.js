import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NotFound.module.scss';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Not found</h1>
      </div>
    );
  }
}


NotFound.propTypes = {
  className: PropTypes.string,
};

export default NotFound;
