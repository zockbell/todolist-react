import React, { Component } from 'react'

class Todoitem extends Component {

    constructor(props){
        super(props);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    // 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法
    handleDeleteItem(){
        this.props.delete(this.props.index);
        // console.log(this.props.index);
    }
    
    render(){
        const { content } = this.props;   //解构赋值
        return (
            <li
                style={{cursor: 'pointer', backgroundColor: "#ddd", padding: '5px', margin: '5px'}}
                onClick={this.handleDeleteItem}
            >
                {content}
            </li>
        )
    }
}

export default Todoitem
