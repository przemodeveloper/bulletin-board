import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './ShowPost.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ShowPost extends Component {

  state = {
    listOfAds: [],
    title: [],
    text: [],
    author: [],
    created: [],
    status: [],
    _id: [],
    clicked: true,
    buttonName: 'Edit',
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/posts')
      .then(res => {
        console.log(res.data);
        this.setState({listOfAds: res.data});
        const match = this.state.listOfAds.find( item => item._id == this.props.match.params.id );
        this.setState({title: match.title, text: match.text, author: match.author, created: match.created, status: match.status});
      })
      .catch(err => {
        console.log(err);
      });
  }

  postEdit = () => {
    const newObject = {
      author:	this.state.author,
      updated:	new Date(),
      status:	'updated',
      title:	this.state.title,
      text:	this.state.text,
    };
    if(this.state.clicked == true) {
      this.setState({clicked: false, buttonName: 'Save'});
    } else {
      this.setState({clicked: true, buttonName: 'Edit', status: 'updated'});
      axios.put(`http://localhost:8000/api/posts/${this.props.match.params.id}`, newObject)
        .then(response => {
          console.log(response);
        });
    }
  };

  render() {
    return (
      <div className={styles.main}>
        <Card className={styles.root}>
          {this.state.clicked ?
            <CardContent>
              <Typography className={styles.title} color="textSecondary" gutterBottom>
                {this.state.title}
              </Typography>
              <Typography className={styles.pos} color="textSecondary">
                {this.state.text}
              </Typography>
              <Typography className={styles.author} color="textSecondary">
                {this.state.author}
              </Typography>
              <Typography className={styles.status} color="textSecondary">
                <p>Created on {this.state.created}, status: {this.state.status}</p>
              </Typography>
              <Typography className={styles.status} color="textSecondary">
              </Typography>
              <Typography className={styles.status} color="textSecondary">
                <Link to='/homepage'>Go to main page</Link>
              </Typography>
            </CardContent>
            : <CardContent>
              <Typography className={styles.title} color="textSecondary" gutterBottom>
                <TextField
                  id="outlined-dense"
                  label="Title"
                  margin="dense"
                  variant="outlined"
                  value={this.state.title}
                  onChange={(event) => this.setState({title: event.target.value})}
                />
              </Typography>
              <Typography className={styles.pos} color="textSecondary">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Content"
                  multiline
                  rowsMax="4"
                  value={this.state.text}
                  margin="normal"
                  variant="outlined"
                  onChange={(event) => this.setState({text: event.target.value})}
                />
              </Typography>
              <Typography className={styles.author} color="textSecondary">
                <TextField
                  id="outlined-dense"
                  label="Author"
                  margin="dense"
                  variant="outlined"
                  value={this.state.author}
                  onChange={(event) => this.setState({author: event.target.value})}
                />
              </Typography>
              <Typography className={styles.status} color="textSecondary">
                <p>Created on {this.state.created}, status: {this.state.status}</p>
              </Typography>
              <Typography className={styles.status} color="textSecondary">
              </Typography>
              <Typography className={styles.status} color="textSecondary">
                <Link to='/homepage'>Go to main page</Link>
              </Typography>
            </CardContent>}
          <Button className={styles.button} onClick={this.postEdit} variant="contained" color="primary">
            {this.state.buttonName}
          </Button>
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

export default ShowPost;
