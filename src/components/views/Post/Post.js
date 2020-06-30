import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './Post.module.scss';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


class Post extends Component {

  render() {
    return (
      <Card className={styles.root} onClick={this.props.clicked}>
        <CardContent className={styles.card}>
          <Typography className={styles.title} color="textSecondary" gutterBottom>
            {this.props.title}
          </Typography>
          <Typography className={styles.pos} color="textSecondary">
            {this.props.content}
          </Typography>
          <Typography className={styles.author} color="textSecondary">
            {this.props.author}
          </Typography>
          <Typography className={styles.author} color="textSecondary">
            <Link to={this.props.link}>Show details</Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Post.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  clicked: PropTypes.func,
  link: PropTypes.string,
};

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Post;
