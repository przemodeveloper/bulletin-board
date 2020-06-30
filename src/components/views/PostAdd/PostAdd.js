import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './PostAdd.module.scss';
// import clsx from 'clsx';
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

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default PostAdd;
