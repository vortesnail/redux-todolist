import React, { Component } from 'react';
import { connect } from 'react-redux';
import './addtodo.css';
import { Input, Button, List } from 'antd';
import * as actionCreators from './store/actionCreators';

class AddTodo extends Component {

  render() {
    return (
      <div className="addtodo-container">
        <Input placeholder="输入待办事项" onChange={this.props.changeInputValue} value={this.props.inputValue} />
        <Button
          type="primary"
          onClick={this.props.addTodoListItem}
        >添加</Button>
        <div className="list-container">
          <List
            size="small"
            bordered
            dataSource={this.props.todoList}
            renderItem={(item, index) => (
              <List.Item 
                key={index} 
                onClick={this.props.deleteTodo.bind(this, index)}
                // 以下这样传参就不行
                // onClick={index => {this.props.deleteTodo(index)}}
              >
                <p className="item-content">{item}</p>
              </List.Item>
            )}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.addtodo.inputValue,
  todoList: state.addtodo.todoList
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      dispatch(actionCreators.changeInputValue(e.target.value));
    },
    addTodoListItem() {
      dispatch(actionCreators.addTodoListItem())
    },
    deleteTodo(index) {
      dispatch(actionCreators.deleteTodo(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);