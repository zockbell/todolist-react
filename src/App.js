import React, { Component } from 'react';
import './App.css';
import Todoitem from './Todoitem'

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

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deteleItem = this.deteleItem.bind(this);

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

  deteleItem(index){
    console.log(index)
    const list_copy = [...this.state.list];
    list_copy.splice(index,1);
    this.setState({
      list: list_copy,
    });
  }

  getTodolist() {
    return (
      this.state.list.map((item,index) => {
        // 父组件通过属性的形式向子组件传递参数
        // 子组件通过props接收父组件传递过来的参数
        return (
          <Todoitem 
            delete={this.deteleItem}
            key={index}
            content={item}
            index={index}
          />
        )
        // return <li style={{cursor: "pointer", backgroundColor: "#ddd", listStyle: 'none', padding: '5px 0 5px 0', margin: '5px'}} key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
      })
    )
  }

  render() {
    return (
      // jsx 语法
      <React.Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInput} />
          <button onClick={this.handleClick}>添加</button>        
        </div>
        {/* 添加列表展示 */}
        <ul style={{padding: '0'}}>
          {
            this.getTodolist()
          }
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
