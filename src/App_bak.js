import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        // 'Chinese-English dictionary',
        // 'overslept',
        // 'learn morning',
      ],
      inputValue: ''
    }
  }

  handleClick(){
    // alert(1);
    // this.state.list.push("aabbcc");
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
    
  }

  handleInput(e){
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  
  handleDelete(index){
    console.log(index)
    const list_copy = [...this.state.list];
    list_copy.splice(index,1);
    this.setState({
      list: list_copy,
    });
  }

  render() {
    return (
      // jsx 语法
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInput.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>添加</button>        
        </div>
        {/* 添加列表展示 */}
        <ul style={{padding: '0'}}>
          {
            this.state.list.map((item,index) => {
              return <li style={{cursor: "pointer", backgroundColor: "#ddd", listStyle: 'none', padding: '5px 0 5px 0', margin: '5px'}} key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
