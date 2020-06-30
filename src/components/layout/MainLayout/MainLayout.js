import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './MainLayout.module.scss';
//import clsx from 'clsx';

class MainLayout extends Component {
  render() {
    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}


MainLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default MainLayout;
