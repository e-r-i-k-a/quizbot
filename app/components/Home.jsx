import React from 'react';

const Home = (props) => {

  return (
    <div>
      <p>Landing Homepage</p>
      <button
            onClick={props.advance}
          >
            Take the Quiz!
				</button>
    </div>
  );
}

export default Home;
