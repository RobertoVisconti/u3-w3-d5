import { Container, Image, Nav, Navbar } from "react-bootstrap";

const NavBarMobile = () => {
  return (
    <Navbar variant="dark" expand="md" className="d-md-none">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="/apple.svg"
            alt="logo"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="mobile-nav" />
        <Navbar.Collapse id="mobile-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#novita">Novità</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMobile;
