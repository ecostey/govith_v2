import React from 'react';

function LandingPage(props) {
    return (

        <div className="App-header">
            <h1>Govith</h1>
            <p>Guardian of De-Bogger</p>
            <button
                onClick={props.onClickListener}>
                Enter Dungeon
                </button>
        </div>
    );
}

export default LandingPage;


//TODO:
//Style component & images