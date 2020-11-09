import ToDoList from 'components/ToDoList/ToDoList';
import React from 'react';

import { IToDo } from '../../@types/ITodo';

const todoss: IToDo[] = [
  {
    id: '1',
    title: 'Regar plantas',
    description: 'Regar todas menos o cacto',
  },
  {
    id: '2',
    title: 'Passar no code challenge',
    description:
      'Caprichar no código e passar no code challenge mais facil do planeta',
  },
];

const Home = () => {
  return (
    <div>
      <h1>What&apos;s up, Olivia!</h1>
      <ToDoList todos={todoss} />
    </div>
  );
};

export default Home;
