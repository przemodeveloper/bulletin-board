import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './NotFound.module.scss';
//import clsx from 'clsx';

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

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default NotFound;
