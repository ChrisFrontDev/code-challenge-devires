import React from 'react';
import Todo from './Todo/Todo';

import { ToDoListContainer, ToDoListTitle } from './styles';

interface ToDo {
  id: string;
  title: string;
  description: string;
}

interface ToDoListProps {
  todos: ToDo[];
}

const ToDoList: React.FC<ToDoListProps> = ({ todos }) => {
  return (
    <ToDoListContainer>
      <ToDoListTitle> TODAY&apos;S TASK </ToDoListTitle>
      {todos.map((todo: ToDo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ToDoListContainer>
  );
};

export default ToDoList;
