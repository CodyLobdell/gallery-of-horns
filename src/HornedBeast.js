import React from "react";
import "./HornedBeast.css"
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0
    };
  }


  clickFav = () => {
    this.setState(
      { favorites: this.state.favorites + 1, }
    )
  };


  clickBeast = () => {
    this.props.openModal(this.props.title, this.props.image_url, this.props.description);
    this.clickFav();

  }

  render() {
    


    return (
      <>

        <Card>

          <h2>{this.props.title}</h2>
          <p>💖{this.state.favorites} <Badge bg="cool">Favorites</Badge></p>
          <Card.Img onClick={this.clickBeast} variant="top" src={this.props.image_url} alt={this.props.keyword} title={this.props.title} />
          <Card.Body>
            <Card.Text>
              {this.props.description}
            </Card.Text>
          </Card.Body>
        </Card>

      </>
    )
  };

}

export default HornedBeast;