import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostAdd.module.scss';
import Button from '@material-ui/core/Button';

const PostAdd = (props) => {
  return(
    <div className={styles.root}>
      <Button variant="contained" color="primary" onClick={props.addPost} className={styles.button}>
        Add post
      </Button>
    </div>
  );
};

PostAdd.propTypes = {
  className: PropTypes.string,
  addPost: PropTypes.func,
};

export default PostAdd;
