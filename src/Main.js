import React from 'react';
import HornedBeast from './HornedBeast';


// place saver for image info here. Still need "url, title, description, & keyword"

class Main extends React.Component {
  // component Props: Values that are passed from parent to child component;
  constructor(props) {
    super(props);
    this.id = props.id;
  }

  // built in method on React Components
  render() {
    return (
      <div>
        <HornedBeast title={horns[0].title} imageUrl={horns[0].imageUrl} description={horns[0].description}/>
        <HornedBeast title={horns[1].title} imageUrl={horns[1].imageUrl} description={horns[1].description}/>
      </div>

    )
  }
}

export default Main;