/* The App class is the main class that renders the Navbar and the Routes */
import React, { Component } from 'react'
import UserCreate from './components/UserCreate'
import UserDelete from './components/UserDelete'
import UserList from './components/UserList'
import UserSearch from './components/UserSearch'
import UserUpdate from './components/UserUpdate'
import { Nav, Container, Navbar } from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import "./components/App.css"
import "./components/Comman.css"
// import { useLocation, useNavigate, useParams } from "react-router-dom";

export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: null,
  //     address: null,

  //   }
  // }
  render() {
    return (
      <>

        <BrowserRouter>
          <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className='lnk-nav' to="/">UserList</Link>
                  <Link className='lnk-nav' to="/create">UserCreate</Link>
                  <Link className='lnk-nav' to="/update">UserUpdate</Link>
                  <Link className='lnk-nav' to="/search">UserSearch</Link>
                  <Link className='lnk-nav' to="/delete">UserDelete</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/' element={<UserList />} />
            <Route path='/create' element={<UserCreate />} />
            <Route path='/update' element={<UserUpdate />} />
            <Route path='/search' element={<UserSearch />} />
            <Route path='/delete' element={<UserDelete />} />
          </Routes>
        </BrowserRouter>



      </>
    )
  }
}
