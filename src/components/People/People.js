import React from 'react';
import Person from './Person/Person';

const people = props => (
    props.persons.map((person, index) => {
        return (
          <Person
            name={person.name}
            age={person.age}
            change={event => props.change(event, person.id)}
            clickRef={() => props.clickRef(index)}
            key={person.id}
          />
        );
      })
);

export default React.memo(people);