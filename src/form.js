import React from "react";
import "./form.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class FormSelect extends React.Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.filterHorns}>
          <Form.Group controlId="chooseHorns"  >

            <Form.Label>
              How Many Horns Would You Like?
            </Form.Label>
            <Form.Select name="select" onChange={this.props.select}>
              <option value="all">All Horns</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="4">100 Horns!?</option>
            </Form.Select>
            <Button type="submit">Submit!</Button>
          </Form.Group>
        </Form>
      </>
    )

  }



}

export default FormSelect;