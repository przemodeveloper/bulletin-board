import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './Homepage.module.scss';
//import clsx from 'clsx';
import PostAdd from '../PostAdd/PostAdd';
import Post from '../Post/Post';
import TextField from '@material-ui/core/TextField';
import { database } from '../../../database';


class Homepage extends Component {

  state = {
    title: '',
    content: '',
    author: '',
    listOfAds: [],
    helperText: '',
  }

  componentDidMount() {
    this.setState({listOfAds: database});
  }

  postAd = (event) => {
    const newAd = {
      id: this.state.listOfAds.length + 1,
      title: this.state.title,
      content: this.state.content,
      author: this.state.author,
    };
    if (newAd.title.length !== 0 && newAd.content.length !== 0 && newAd.author.length !== 0) {
      this.setState(prevState => ({
        listOfAds: [...prevState.listOfAds, newAd],
      }));
    } else {
      this.setState({helperText: 'Please provide input.'});
    }
    event.preventDefault();
    console.log(this.state.listOfAds);
  }

  postDelete = (postId) => {
    this.setState((prevState) => {
      return {listOfAds: prevState.listOfAds.filter(post => post.id !== postId)};
    });
  }

  render() {
    return (
      <form noValidate autoComplete="off" className={styles.root}>
        <div className={styles.box}>
          <h1 className={styles.title}>Post new ad</h1>
          <TextField
            id="outlined-dense"
            className={styles.field}
            label="Title"
            margin="dense"
            helperText={this.state.helperText}
            variant="outlined"
            value={this.state.title}
            onChange={(event) => this.setState({title: event.target.value})}
          />

          <TextField
            id="outlined-multiline-flexible"
            className={styles.multi}
            label="Content"
            multiline
            rowsMax="4"
            helperText={this.state.helperText}
            value={this.state.content}
            onChange={(event) => this.setState({content: event.target.value})}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-dense"
            className={styles.field}
            label="Author"
            margin="dense"
            helperText={this.state.helperText}
            variant="outlined"
            value={this.state.author}
            onChange={(event) => this.setState({author: event.target.value})}
          />
        </div>

        <PostAdd addPost={this.postAd}/>
        <div className={styles.container}>
          {this.state.listOfAds.map(single => {
            return <div
              key={single.id + 1}
              className={styles.space}>
              <Post key={single.id}
                id={single.id}
                title={single.title}
                link={'/homepage/post/' + single.id}
                content={single.content}
                clicked={() => this.postDelete(single.id)}
                author={single.author}/>
            </div>;
          })}
        </div>
      </form>

    );
  }
}


Homepage.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = (state) => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Homepage;
