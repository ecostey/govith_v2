import React from 'react';

function ScoreBox (props){
    const scoreBoxData = (
        <div class="scoreWrapper">
            <h3>SCORE</h3>
            <h2 id="score">0</h2>
            <p className="scoreAlert">+{pointsEarned}pts for {action}!</p>
        </div>
    )
    return(scoreBoxData);
}

export default ScoreBox;

//TODO: 
//Define PointsEarned & action
//Pass in pointsEarned and Action from... GamePage.jsx?
//determine how counter funtion should be set up (in conjunction with the MOB's methods... +20 for treasure, +10 for goblins...etc)
//Add style component