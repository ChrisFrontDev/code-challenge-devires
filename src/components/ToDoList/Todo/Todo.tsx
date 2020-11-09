import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../store/ducks/todos.duck';

import { MdDelete } from 'react-icons/md';

import { TodoContainer } from './styles';

import { IToDo } from '../../../@types/ITodo';
interface IProps {
  todo: IToDo;
}

const Todo: React.FC<IProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return (
    <TodoContainer>
      <div>
        <h2>{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <MdDelete size={20} onClick={() => handleDeleteTodo(todo.id)} />
    </TodoContainer>
  );
};

export default Todo;
