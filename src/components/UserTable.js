/** @format */
import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import { FaPen, FaTrash } from 'react-icons/fa'
import axios from 'axios'

function UserTable() {
  const [isEdit, setIsEdit] = useState(null)
  const [isDelete, setIsDelete] = useState(null)
  const [state1, setState1] = useState([])

  useEffect(() => {
    if (isDelete === false) {
      fetch('http://localhost:3005/users')
        .then((response) => response.json())
        .then((data) => {
          setState1([...data])
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    } else {
      axios
        .delete(`http://localhost:3005/users/${isDelete}/`)
        .then((resp) => {})
        .catch((error) => {
          console.log(error)
        })
    }
    setIsDelete(false)
  }, [isDelete])

  return (
    <>
      <Table bordered hover>
        <thead>
          <tr key="headerRow">
            <th key="headerFirstName">First Name</th>
            <th key="headerLastName">Last Name</th>
            <th key="headerDOB">Date of Birth</th>
            <th key="headerPhone">Phone Number</th>
            <th key="headerAddress">Address</th>
            <th key="headerNotes">Notes</th>
            <th key="headerEdit"></th>
          </tr>
        </thead>
        <tbody>
          {state1.map((d) => (
            <tr key={d.id}>
              <td key={`name${d.id}`}>{d.first_name}</td>
              <td key={`lastName${d.id}`}>{d.last_name}</td>
              <td key={`dob${d.id}`}>{d.dob}</td>
              <td key={`phoneNumber${d.id}`}>{d.phone_number}</td>
              <td key={`address${d.id}`}>{d.address}</td>
              <td key={`notes${d.id}`}>{d.notes}</td>
              <td key={`edit${d.id}`}>
                <FaPen onClick={() => setIsEdit(true)} />
                <FaTrash onClick={() => setIsDelete(d.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default UserTable
