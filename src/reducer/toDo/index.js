import {
  SUCCESS_ADD_POINT,
  SUCCESS_CHANGE_POINT,
} from './constant';

const newPoint = {
 name: '', status: false
};

export default function (state = [], action) {
  switch (action.type) {
    case SUCCESS_ADD_POINT: {
      const newTodo = state.concat({id: state.length, ...newPoint});
      return [... newTodo];
    }
    case SUCCESS_CHANGE_POINT: {
      const newTodo =  state.map((point)=> point.id ===  action.payload.id ? {...point, status: action.payload.status, name: action.payload.name }: point);
      return [...newTodo];
    }
    default:
      return state
  }
}