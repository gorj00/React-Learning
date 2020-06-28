import React, { useState } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
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


  // Handling conditional logic for people
  let people = null;
  if (peopleState.showPeople) {
    people = (
      // JSX expression
      <div>
        <People 
          persons={peopleState.persons}
          change={nameChangeHandler}
          clickRef={deletePersonHandler}
        />
      </div>
    );
  }

  return ( 
    <StyleRoot>
      <div className="App"> 
        <header className="App-header">
          <Cockpit 
            showPeople={peopleState.showPeople}
            people={peopleState.persons}
            clicked={togglePersonHandler}
          />
          {people}
        </header>
      </div>
    </StyleRoot>
  );
}

export default Radium(App);