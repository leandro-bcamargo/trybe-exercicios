import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <aside>
        <h3>Uma categoria hardcoded</h3>
        <ul>
          <li>
            Um filme qualquer
            {' '}
            was released in
            {' '}
            1995
            <button
              type="button"
              onClick={ () => {} }
            >
              Select
            </button>
          </li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
