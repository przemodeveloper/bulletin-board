import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Homepage.module.scss';
import PostAdd from '../PostAdd/PostAdd';
import Post from '../Post/Post';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


class Homepage extends Component {

  state = {
    title: '',
    text: '',
    author: '',
    listOfAds: [],
    helperText: '',
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/posts')
      .then(res => {
        console.log(res.data);
        this.setState({listOfAds: res.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  postAd = () => {
    if (this.state.title.length !== 0 && this.state.text.length !== 0 && this.state.author.length !== 0) {
      axios.post('http://localhost:8000/api/posts', {
        title: this.state.title,
        text: this.state.text,
        author: this.state.author,
        status: 'published',
        created: new Date(),
      })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
      window.location.reload(false);
    } else {
      this.setState({helperText: 'Please provide input.'});
    }
  }

  postDelete = (postId) => {
    axios.delete(`http://localhost:8000/api/posts/${postId}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
    this.setState((prevState) => {
      return {listOfAds: prevState.listOfAds.filter(post => post._id !== postId)};
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
            label="Text"
            multiline
            rowsMax="4"
            helperText={this.state.helperText}
            value={this.state.content}
            onChange={(event) => this.setState({text: event.target.value})}
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
              key={single._id}
              className={styles.space}>
              <Post key={single._id}
                id={single._id}
                title={single.title}
                link={'/homepage/post/' + single._id}
                clicked={() => this.postDelete(single._id)}
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

export default Homepage;
