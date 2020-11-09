import React from 'react';
import Todo from './Todo/Todo';

import { IToDo } from '../../@types/ITodo';

import { ToDoListContainer, ToDoListTitle } from './styles';
interface ToDoListProps {
  todos: IToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ToDoListContainer>
      <ToDoListTitle> TODAY&apos;S TASK </ToDoListTitle>
      {todos.map((todo: IToDo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ToDoListContainer>
  );
};

export default ToDoList;
