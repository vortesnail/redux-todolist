import * as actionTypes from './actionType';

const defaultState = {
  inputValue: '',
	todoList: []
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case actionTypes.CHANGE_INPUT_VALUE:
      newState.inputValue = action.value
      return newState;
    case actionTypes.ADD_TODO:
      newState.todoList.push(newState.inputValue);
      newState.inputValue = '';
      return newState;
    case actionTypes.FINISH_TODO_ITEM:
			newState.todoList.splice(action.index, 1);
      return newState;
		default:
			return state;
	}
}