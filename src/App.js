import React from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles.css';

const posts = ['./posts/demo.md'];

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const markdownPosts = posts.map((post) => require(post));
    this.setState({ posts: markdownPosts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
