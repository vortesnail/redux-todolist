import * as actionTypes from './actionType';

export const changeInputValue = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
})

export const addTodoListItem = () => ({
  type: actionTypes.ADD_TODO,
})

export const deleteTodo = (index) => ({
  type: actionTypes.FINISH_TODO_ITEM,
  index,
})