import React from 'react';

import { TodoContainer } from './styles';

interface ToDo {
  id: string;
  title: string;
  description: string;
}

interface IProps {
  todo: ToDo;
}

const Todo: React.FC<IProps> = ({ todo }) => {
  return (
    <TodoContainer>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </TodoContainer>
  );
};

export default Todo;
