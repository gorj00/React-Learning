import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const initialState = {
    persons: [
        { name: 'John', age: 29},
        { name: 'Anne', age: 30}
    ],
    iWillBeMerged: true
  };

  const [peopleState, setPeopleState] = useState(initialState);

  // const [mergeState, setMergeState] = useState(
  //   {...peopleState, iWillBeMerged: true}
  //   );

  const switchNameHandler = () => {
    setPeopleState({
      ...peopleState,
      persons: [
        { name: 'Max', age: 29},
        { name: 'Bob', age: 22}
      ]
    });
  }

  const nameChangeHandler = event => {
    setPeopleState({
      ...peopleState,
      persons: [
        { name: event.target.value, age: 29},
        { name: 'Anne', age: 30}
      ]
    });
  }
  
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid grey',
    padding: '8px',
    cursor: 'pointer'
  };

  return ( 
    <div className="App"> 
      <header className="App-header">
        <button 
          style={style}
          onClick={switchNameHandler}
        >Switch Name</button>
          <Person 
              name={peopleState.persons[0].name} 
              age={peopleState.persons[0].age} 
              change={nameChangeHandler}
          />
          <Person 
              name={peopleState.persons[1].name} 
              age={peopleState.persons[1].age}
              clickRef={switchNameHandler}
          />
      </header>
    </div>
  );
}

export default App;