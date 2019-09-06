import {
  SUCCESS_ADD_POINT,
  SUCCESS_CHANGE_POINT
} from './constant';

export function addTodo() {
  return({
    type: SUCCESS_ADD_POINT,
  })
}

export function changeTodo(point) {
  return({
    type: SUCCESS_CHANGE_POINT,
    payload: point
  })
}

