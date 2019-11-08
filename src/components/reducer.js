import { combineReducers } from 'redux'
import { reducer as addtodoReducer } from '../components/addtodo/store/index';

const reducer = combineReducers({
  addtodo: addtodoReducer,
  
})

export default reducer;