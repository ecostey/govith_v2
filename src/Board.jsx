import React from 'react';

function Board(props) {
  //set an empty array to hold each tile of the board
  const boardArray = [];
  //use a nested for loop to iterate through the level-specific data 
  //(lifted up and passed down from boardData.jsx)
  //and make each itrerable into an element.
  for (let i = 0; i < props.level.length; i += 1) {
    for (let j = 0; j < props.level.length; j += 1) {
      const element = (
        <div>
          <p>Hello</p>
        </div>
      );
      //assign classnames and ids to each element
      //then push each element into the new board array.
      const currentClassName = props.level[i][j];
      element.className = 'tile';
      element.classList.add(currentClassName);
      element.id = currentClassName + j + i;
      boardArray.push(element);
    }
  }
  return(boardArray);
}

export default Board;

//TODO:
//Fix 'level errors on lines 5 & 6 - not passing evel data correctly.
//style component
