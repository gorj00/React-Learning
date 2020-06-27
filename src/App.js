import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium, { StyleRoot } from 'radium';

const App = props => {
  const initialState = {
    persons: [
        { name: 'John', age: 29, id: 'we5dwd5'},
        { name: 'Anne', age: 30, id: 'eef5fe5'},
        { name: 'Maria', age: 20, id: 'ssef6f2'}
    ],
    showPeople: false,
  };

  const [peopleState, setPeopleState] = useState(initialState);

  const deletePersonHandler = personIndex => {
    // Reference type! cannot change the current state with splice()
    // const people = peopleState.persons;
    const people = [...peopleState.persons];
    // removing that person
    people.splice(personIndex, 1);

    // updating the state
    setPeopleState({
      ...peopleState,
      persons: people
    });
  }

  const nameChangeHandler = (event, id) => {
    // Find the index of current person
    const personIndex = peopleState.persons.findIndex(p => {
      return p.id === id;
    });
 
    // Update the his name
    const person = {...peopleState.persons[personIndex]};
    person.name = event.target.value;

    // Update the persons
    const persons = [...peopleState.persons];
    persons[personIndex] = person;

    // Update the state
    setPeopleState({
      ...peopleState,
      persons
    });
  }
  
  const togglePersonHandler = () => {
    const isShowing = peopleState.showPeople;
    setPeopleState({
      ...peopleState,
      showPeople: !isShowing
    });
  }

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid grey',
    padding: '8px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  const classes = [];

  // Handling conditional logic for people
  let people = null;
  if (peopleState.showPeople) {
    people = (
      // JSX expression
      <div>
        {peopleState.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              change={event => nameChangeHandler(event, person.id)}
              clickRef={() => deletePersonHandler(index)}
              key={person.id}
            />
          );
        })}
      </div>
    );

    if (peopleState.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (peopleState.persons.length <= 1) {
        classes.push('bold'); // classes = ['bold']
    }

    style.backgroundColor = 'red';
    style[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black'
    }
  }

  return ( 
    <StyleRoot>
      <div className="App"> 
        <header className="App-header">
          <p className={classes.join(' ')}>Working dynamic styles!</p>
          <button 
            style={style}
            onClick={togglePersonHandler}
          >Show People</button>
          {people}
        </header>
      </div>
    </StyleRoot>
  );
}

export default Radium(App);