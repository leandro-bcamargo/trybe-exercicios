import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Um filme qualquer
        </h1>
        <h3>
          Comédia
          {' '}
          -
          {' '}
          2019
        </h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src=""
          />
        </section>
      </div>
    );
  }
}

export default Player;
