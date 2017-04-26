import React, {Component} from 'react';
import axios              from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

class Posts extends Component {
  constructor (props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount () {
    axios.get(url)
    .then((response) => {
      this.setState({posts: response.data});
    })
  }

  render () {
    const { posts } = this.state;
    if (posts.length === 0) return <p>Loading...</p>;

    const postsList = posts.map((post) => {
      return <li key={post.id}>{post.title}</li>;
    });

    return <ul>{postsList}</ul>;
  }
}

export default Posts;
