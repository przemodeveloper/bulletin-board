import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './ShowPost.module.scss';
//import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { database } from '../../../database';

class ShowPost extends Component {

  state = {
    listOfAds: [],
    title: [],
    content: [],
    author: [],
  }

  componentDidMount() {
    this.setState({listOfAds: database});
    const match = database.find( item => item.id == this.props.match.params.id );
    this.setState({title: match.title, content: match.content, author: match.author});
  }

  render() {
    return (
      <div className={styles.main}>
        <Card className={styles.root}>
          <CardContent>
            <Typography className={styles.title} color="textSecondary" gutterBottom>
              {this.state.title}
            </Typography>
            <Typography className={styles.pos} color="textSecondary">
              {this.state.content}
            </Typography>
            <Typography className={styles.author} color="textSecondary">
              {this.state.author}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}


ShowPost.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ShowPost;
