import React from 'react';

import ToDoList from 'components/ToDoList/ToDoList';

const Home: React.FC = () => {
  return (
    <div>
      <h1>What&apos;s up, Olivia!</h1>
      <ToDoList />
    </div>
  );
};

export default Home;
