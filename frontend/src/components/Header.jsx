import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/622/622848.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Customer Relationship Management
        </Navbar.Brand>
      </Container>
    </Navbar>
  </>

  );
};

export default Header;



