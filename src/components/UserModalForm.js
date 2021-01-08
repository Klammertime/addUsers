/** @format */

import React from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

class UserModalForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      dob: '',
      phoneNumber: '',
      address: '',
      notes: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.onInvalid = this.onInvalid.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  onInvalid(event) {
    console.log('invalid')
  }

  onSubmit = () => {
    const { firstName, lastName, phoneNumber, address, dob, notes } = this.state
    const id = new Date().getUTCMilliseconds()

    axios
      .post('http://localhost:3005/users', [
        {
          id,
          first_name: firstName,
          last_name: lastName,
          phone_number: phoneNumber,
          address,
          dob,
          notes,
        },
      ])
      .then(() => {})
  }

  render() {
    return (
      <>
        <Form>
          <Form.Group controlId="ControlInput1">
            <Form.Label>First Name:</Form.Label>
            <Form.Control
              required
              name="firstName"
              type="text"
              placeholder="First Name:"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="ControlInput2">
            <Form.Label>Last Name:</Form.Label>
            <Form.Control
              required
              name="lastName"
              type="text"
              placeholder="Last Name:"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="ControlInput3">
            <Form.Label>Date of Birth:</Form.Label>
            <Form.Control
              required
              name="dob"
              type="text"
              placeholder="Date of Birth:"
              value={this.state.dob}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="ControlInput4">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              required
              name="phoneNumber"
              type="text"
              placeholder="Phone Number:"
              value={this.state.phoneNumber}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="ControlInput5">
            <Form.Label>Address:</Form.Label>
            <Form.Control
              oninvalid={this.onInvalid}
              required
              name="address"
              type="text"
              placeholder="Address:"
              value={this.state.address}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="ControlTextarea1" srOnly>
              *Notes
            </Form.Label>
            <Form.Control
              name="notes"
              className="mb-2 mr-sm-2"
              id="ControlTextarea1"
              placeholder="*Notes"
              as="textarea"
              rows={3}
              value={this.state.notes}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </>
    )
  }
}

export default UserModalForm
