import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      posts: [],
      comments: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data, isLoading: false }))

     this. timerId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => this.setState({ comments: data }))
    }, 4000)
    // делаем get запросы на БЕК
  }

  componentDidUpdate() {
    console.log('update', this.timerId)
    // следим за апдейтами
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    // очистка памяти
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? <h3>loading...</h3> : <h3>
          {this.state.posts.length} was loaded
        </h3>}
      </div>
    )
  }
}

export default App;
