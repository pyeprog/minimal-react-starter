import React from 'react';
import ReactDOM from 'react-dom';

function Test(props) {
  return (
    <div>{props.word}</div>
  );
}

ReactDOM.render(<Test word="some test text"/>, document.querySelector('.container'));
