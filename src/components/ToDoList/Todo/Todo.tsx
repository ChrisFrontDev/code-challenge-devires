import React from 'react';

import { TodoContainer } from './styles';

import { IToDo } from '../../../@types/ITodo';
interface IProps {
  todo: IToDo;
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
