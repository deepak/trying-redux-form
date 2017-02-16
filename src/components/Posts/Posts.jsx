import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
   dispatchFetchPosts
} from '../../actions/actionCreators';

class Posts extends Component {
  constructor(args) {
    super(args);
  }

  componentDidMount() {
    this.props.dispatch(dispatchFetchPosts());
  }

  renderInFlight() {
    return (
      <div className="loading">
        Loading. Please wait
      </div>
    );
  }

  renderPosts() {
    const {
      posts
    } = this.props;

    return (
      <div className="posts">
        <h1>All Posts</h1>
        <ul>
          {
            posts.map(post => <li key={post.id}>{post.title}</li>)
          }
        </ul>
      </div>
    );
  }

  render() {
    const { posts } = this.props;
    const inFlight = this.props.inFlight;

    return (
      <div>
        { inFlight ? this.renderInFlight() : this.renderPosts() }
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({
  posts: posts.data,
  inFlight: posts.inFlight,
  inError: posts.inError
});

export default connect(mapStateToProps)(Posts);
