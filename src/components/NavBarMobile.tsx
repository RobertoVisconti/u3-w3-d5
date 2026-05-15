import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { getFetchAction } from "../redux/actions";
import { BiBroadcast, BiNews, BiSearch } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { useState } from "react";

const NavBarMobile = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(getFetchAction(searchQuery));
      setSearchQuery("");
    }
  };
  return (
    <Navbar variant="dark" expand="md" className="d-md-none bg-black py-3">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image
            src="/apple.svg"
            alt="logo"
            style={{ filter: "brightness(0) invert(1)", width: "30px" }}
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="mobile-nav"
          className="border-0 shadow-none"
        />

        <Navbar.Collapse id="mobile-nav">
          <Nav className="mt-3">
            {/* Searchbar SideNavBar */}
            <Form onSubmit={handleSearch} className="mb-4">
              <div className="position-relative d-flex align-items-center">
                <BiSearch className="position-absolute ms-2 opacity-50 text-white" />
                <Form.Control
                  type="text"
                  placeholder="Cerca"
                  className="bg-dark border-0 text-white ps-5 py-2 rounded-3 shadow-none"
                  style={{ backgroundColor: "#2c2c2c" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </Form>

            {/* Link SideNavBar */}
            <Nav.Link
              href="#"
              className="text-white d-flex align-items-center py-2"
            >
              <BsHouseDoor className="me-3 text-danger" /> Home
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-white d-flex align-items-center py-2"
            >
              <BiNews className="me-3 text-danger" /> Novità
            </Nav.Link>
            <Nav.Link
              href="#"
              className="text-white d-flex align-items-center py-2 "
            >
              <BiBroadcast className="me-3 text-danger" /> Radio
            </Nav.Link>

            {/* Bottone Accedi */}
            <Button variant="danger" className="mt-4 w-100 rounded-3">
              Accedi
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarMobile;
