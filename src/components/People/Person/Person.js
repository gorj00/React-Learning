import React from 'react';
import './Person.css';
import styles from './Person.module.css';
import Radium from 'radium';

const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.clickRef} className={styles['text-colored']}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name} />
        </div>
    )
};


export default React.memo(person);