/** @format */

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import UserTable from './components/UserTable'
import UserModal from './components/UserModal'

function App() {
  return (
    <Container className="App">
      <header></header>
      <UserTable></UserTable>
      <UserModal />
    </Container>
  )
}

export default App
