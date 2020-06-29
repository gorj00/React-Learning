import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = props => {
    // --- CREATION & UPDATE COMPONENT ---

    // On create component
    useEffect(() => {
        console.log('[Cockpit.js] useEffect 1');
        // Its own logic
    }, []);

    // On props.showPoeople change
    useEffect(() => {
        console.log('[Cockpit.js] useEffect 2');
        // For example http request ...
    }, [props.showPeople]);


// --- CLEANUP ---

    //Cleanup on component's every rerender
    useEffect(() => {
        console.log('[Cockpit.js] useEffect component every rerender');

        return () => {
           console.log('useEffect component cleanup with every rerender'); 
        }
    });

    //Cleanup on component destruction
    useEffect(() => {
        console.log('[Cockpit.js] useEffect component destruction cleanup');

        return () => {
           console.log('useEffect component destruction cleanup'); 
        }
    }, []);

    const classes = [];

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid grey',
        padding: '8px',
        cursor: 'pointer',
    };

    if (props.peopleLength <= 2) {
        classes.push('red'); // classes = ['red']
      }

    if (props.peopleLength <= 1) {
        classes.push('bold'); // classes = ['bold']
    }
  
    if (props.showPeople) {
      style.backgroundColor = 'red';
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

export default React.memo(Cockpit);