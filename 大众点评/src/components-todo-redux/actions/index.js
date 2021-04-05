import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODO_TEXT,
  SET_FILTER,
} from './actionTypes';

let nextTodoId = 0;

// 新增待办事项
export const addTodo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId ++,
  text
})

// 更改待办事项
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

// 设置过滤状态
export const setFilter = filter => ({
  type: SET_FILTER,
  filter
})


// 设置新增待办事项文本
export const setTodoText = text => ({
  type: SET_TODO_TEXT,
  text
})

// // 一般都会把actionType设置为常量

// // 新增待办事项
// export const addTodo = (text) => {{
//   type: 'ADD_TODO',
//   id: nextTodoId ++,
//   text
// }}

// // 更改待办事项
// export const toggleTodo = id => ({
//   type: 'TOGGLE_TODO',
//   id
// })

// // 设置过滤状态
// export const setFilter = filter => ({
//   type: 'SET_FILTER',
//   filter
// })


// // 设置新增待办事项文本
// export const setTodoText = text => ({
//   type: 'SET_TODO_TEXT',
//   text
// })