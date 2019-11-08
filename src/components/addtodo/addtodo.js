import React, { Component } from 'react';
import { connect } from 'react-redux';
import './addtodo.css';
import { Input, Button } from 'antd';
import * as actionCreators from './store/actionCreators';

class AddTodo extends Component {

  render() {
    return (
      <div className="addtodo-container">
        <Input placeholder="输入待办事项" onChange={this.props.changeInputValue} value={this.props.inputValue}/>
        <Button
          type="primary"
          onClick={this.props.addTodoListItem}
        >添加</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  inputValue: state.addtodo.inputValue
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      dispatch(actionCreators.changeInputValue(e.target.value));
    },
    addTodoListItem() {
      dispatch(actionCreators.addTodoListItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);