import React, { SyntheticEvent, useState } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';

import { addTodo } from 'store/ducks/todos.duck';

import ToDoList from 'components/ToDoList/ToDoList';
import Button from 'components/Button/';
import Input from 'components/Input';

import { HomeContainer } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitForm = (event: SyntheticEvent) => {
    event.preventDefault();

    if (title !== '' && description !== '') {
      dispatch(addTodo(title, description));

      setTitle('');
      setDescription('');
    }
  };
  return (
    <HomeContainer>
      <h1>What&apos;s up, Olivia!</h1>

      <form onSubmit={handleSubmitForm}>
        <Input
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Task"
        />
        <Input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe details of your task"
        />
        <Button type="submit">
          <MdCheckCircle size={20} />
          Add Todo
        </Button>
      </form>

      <h3> TODAY&apos;S TASK </h3>

      <ToDoList />
    </HomeContainer>
  );
};

export default Home;
