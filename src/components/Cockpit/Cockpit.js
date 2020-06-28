import React from 'react';
import Radium from 'radium';
import './Cockpit.css';

const cockpit = props => {
    const classes = [];

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

    if (props.people.length <= 2) {
        classes.push('red'); // classes = ['red']
      }

    if (props.people.length <= 1) {
        classes.push('bold'); // classes = ['bold']
    }
  
    if (props.showPeople) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return(
        <div className="Cockpit">
            <p className={classes.join(' ')}>Working dynamic styles!</p>
            <button 
            style={style}
            onClick={props.clicked}
            >Show People</button>
        </div>
    );
};

export default Radium(cockpit);