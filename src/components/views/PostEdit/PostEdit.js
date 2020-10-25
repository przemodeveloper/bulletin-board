import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PostEdit.module.scss';

class PostEdit extends Component {
  render() {
    return (
      <div className={styles.root}>
        <h1>Post edit</h1>
      </div>
    );
  }
}


PostEdit.propTypes = {
  className: PropTypes.string,
};

export default PostEdit;
