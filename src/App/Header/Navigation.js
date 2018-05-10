import React from 'react';
class Navigation extends React.Component {
    render() {
      return(
        <div id="navigator" className="Navigation" >
          <nav>
            <ul>
              <li> Browse </li>
              <li> My List </li>
              <li> Recent </li>
            </ul>
          </nav>
        </div>
      )
    }
  }
  export default Navigation;