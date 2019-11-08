import * as actionTypes from './actionType';

const defaultState = {
  todoList: []
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
	switch (action.type) {
		case actionTypes.FINISH_TODO_ITEM:
      newState.inputValue = action.value
      return newState;
		default:
			return state;
	}
}