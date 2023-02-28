import React from 'react';

class Header extends React.Component {
    // component Props: Values that are passed from parent to child component;
    constructor(props) {
      super(props);
      this.title = props.title;
    }
  
    // built in method on React Components
    render() {
      return (
        <div>
            <header>
                <h1>Gallery Of Horns</h1>
            </header>
        </div>
      )
    }
  }

  export default Header;