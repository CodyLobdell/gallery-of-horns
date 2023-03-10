import React from "react";
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer";
import data from "./data.json"
import Modal from 'react-bootstrap/Modal'
import FormSelect from "./form"
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image_url: '',
      title: '',
      description: '',
      isShown: false
    }
  }

  //  Functions for Modal

  openModal = (title, url, description) => {
    this.setState({
      isShown: true,
      image_url: url,
      title: title,
      description: description,
    })
  }

  closeModal = () => {
    this.setState({
      isShown: false
    })
  }

  
  select = (e) => {
    this.setState({
      selectHorns: e.target.value
    })
  }

  render() {
    return (
      <>
        <Header />

        <FormSelect
          filterHorns={this.filterHorns}
          select={this.select}

        />
        <Main
          data={data}
          openModal={this.openModal}
        />
        <Footer />
        <Modal
          show={this.state.isShown} onHide={this.closeModal} size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={this.state.image_url} alt={this.state.title} />
            <p>{this.state.description}</p>

          </Modal.Body>

        </Modal>
      </>
    );
  }
};

export default App;