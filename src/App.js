import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      count: 0
    };
    // чтобы не потерять контекст this я использую bind
    this.exponentiation = this.exponentiation.bind(this);  
  }
  // в некоторых записях в сети работают без конструктора а сразу с state
  // this.state = {} - это обьект состояния в классовом компоненте

  increment = () => {
    this.setState((prevState) => ({count: prevState.count + 1}), () => console.log('setState complite'))

    console.log('complite') // это сообщение будет первым потому что setState асинхронный метод 
  };
  // this.setState - это метод для изменения состояния компонента

  decrement = () => this.setState({ count: this.state.count - 1 });
  // этот сценарий чаще используется и делает тоже самое

  // если мну нужно будет обычная ф-я
  exponentiation() {
    this.setState({count: this.state.count ** 2})
  }
  // если мну нужно будет обычная ф-я
componentDidMount() {
 console.log("componentDidMount");
//  fetch ('/post')
}

componentDidUpdate() {
  console.log("componentDidUpdate");
//  fetch ('/post/${id}')
// определенного юзера коментарии лайки

}

componentWillUnmount() {
  console.log("componentWillUnmount");
}
  render() {
    return (
      <div className='container'>
        <button className='btn' onClick={this.increment}>+</button>
        <button className='btn' onClick={this.decrement}>-</button>
        <button className='btn' onClick={this.exponentiation}>**</button>

        {/* onClick() - обработчик клика, в Реакте это норм когда вешаю так на btn*/}
        <span>{this.state.count}</span>
      </div>
    )

  }
}

export default App;
