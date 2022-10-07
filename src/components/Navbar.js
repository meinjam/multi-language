import React, { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import LanguageSwitch from './LanguageSwitch';
import { FormattedMessage } from 'react-intl';

const App = () => {
  const { defaultLanguage } = useContext(LanguageContext);

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link className='navbar-brand' to='/'>
          <FormattedMessage id='website-name' />
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link to='/' className='nav-link'>
              <FormattedMessage id='nav-home' />
            </Link>
            <Link to='/about' className='nav-link'>
              <FormattedMessage id='nav-about' />
            </Link>
          </Nav>
        </Navbar.Collapse>
        <LanguageSwitch />
      </Container>
    </Navbar>
  );
};

export default App;
