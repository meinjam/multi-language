import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const App = () => {
  const { defaultLanguage } = useContext(LanguageContext);

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link className='navbar-brand' to='/'>
          Multi Language React
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
            <Link to='/about' className='nav-link'>
              About Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default App;
