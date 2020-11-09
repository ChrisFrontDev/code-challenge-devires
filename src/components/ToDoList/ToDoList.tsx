import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import { getAllTodos } from 'store/ducks/todos.duck';

import Todo from './Todo/Todo';

import { IToDo } from '../../@types/ITodo';

import { ToDoListContainer, ToDoListTitle } from './styles';

const ToDoList: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: RootState) => state.todosReducer);

  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToDoListContainer>
      {loading ? (
        <h1>LOADING :)</h1>
      ) : (
        <>
          <ToDoListTitle> TODAY&apos;S TASK </ToDoListTitle>
          {todos.map((todo: IToDo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </ToDoListContainer>
  );
};

export default ToDoList;
