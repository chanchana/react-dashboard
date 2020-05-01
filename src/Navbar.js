import React from 'react'
import { Container } from 'react-bootstrap'
import './Navbar.css'

class Navbar extends React.Component {
  render() {

    return (
      <div className="n-nav">
        <Container>
          <h1><b>Dashboard</b></h1>
        </Container>
      </div>
    )
  }
}

export default Navbar