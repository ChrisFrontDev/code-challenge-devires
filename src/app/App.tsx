import ToDoList from 'components/ToDoList/ToDoList';
import React from 'react';
import GlobalStyle from '../styles/global';

interface ToDo {
  id: string;
  title: string;
  description: string;
}

const todoss: ToDo[] = [
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

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>What&apos;s up, Olivia!</h1>
        <ToDoList todos={todoss} />
      </div>
    </>
  );
}

export default App;
