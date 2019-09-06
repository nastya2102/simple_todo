import {
  SUCCESS_ADD_POINT,
  SUCCESS_CHANGE_POINT,
} from './constant';

const newPoint = {
 name: '', status: false
};

const initialState = {
    todo:  localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUCCESS_ADD_POINT: {
      const newTodo = state.todo.concat({id: state.todo.length, ...newPoint});
      return {...state, todo: newTodo};
    }
    case SUCCESS_CHANGE_POINT: {
      const newTodo =  state.todo.map((point)=> point.id ===  action.payload.id ? {...point, status: action.payload.status, name: action.payload.name }: point);
      return {...state, todo: newTodo};
    }
    default:
      return state
  }
}