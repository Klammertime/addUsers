/** @format */

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import UserModalForm from './UserModalForm'

function UserModal() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{
          borderRadius: '50%',
          width: '50px',
          fontSize: '20px',
          height: '50px',
          border: 'none',
        }}
      >
        +
      </Button>

      <Modal centered show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Complete the fields below</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserModalForm />
        </Modal.Body>

        <Modal.Footer
          style={{
            position: 'relative',
            top: '-65px',
          }}
        >
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default UserModal
