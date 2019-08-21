import React from 'react';
import ReactMarkdown from 'react-markdown';

import './styles.css';

const posts = [
  require('./posts/demo.md'),
  require('./posts/demo2.md'),
];

const titles = [
  'Demo Post',
  'Another Demo Post',
];


class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // const markdownPosts = posts.map((post) => require(post));
    // this.setState({ posts: markdownPosts });
    posts.forEach(async (post) => {
      fetch(post)
        .then((res) => res.text())
        .then((md) => {
          const { posts } = this.state;
          const updated = [...posts, md];
          this.setState({ posts: updated }, () => console.log(this.state.posts))
        });
    });
    // fetch(demoPath)
    //   .then((res) => res.text())
    //   .then((md) => {
    //     this.setState({ md: marked(md) }, () => console.log(this.state.md))
    //   });
  }

  render() {
    const { posts } = this.state;
    return (
      <article>
        <div id="TOC">
          <ul>
            {titles.map((title, i) => (
              <li key={`title-${i}`}>{title}</li>
            ))}
          </ul>
        </div>
        <div id="markdownBody">
          {posts.map((post, i) => (
            <ReactMarkdown source={post} key={i} />
          ))}
        </div>
      </article>
    );
  }
}

export default App;
