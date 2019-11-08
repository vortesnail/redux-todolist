import React, { Component } from 'react';
import { connect } from 'react-redux';
import './showtodos.css';
import { List } from 'antd';
// import * as actionCreators from './store/actionCreators';

class ShowTodos extends Component {

  render() {
    return (
      <div className="showtodos-container">
        <List
          size="small"
          bordered
          dataSource={this.props.todoList}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todoList: state.addtodo.todoList
})

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodos);