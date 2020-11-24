import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';
import clsx from 'clsx';

const Component = ({className, children}) => {
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Header</h2>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as Header,
  Component as HeaderComponent,
};
