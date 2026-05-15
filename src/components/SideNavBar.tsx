import { Button, Form, Image, Nav } from "react-bootstrap";
import { BiBroadcast, BiNews, BiSearch } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { getFetchAction } from "../redux/actions";
import { useState } from "react";
import type { AppDispatch } from "../redux/store";

const SideNavBar = () => {
  // Parametri per la ricerca
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  // Parametri per il click
  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(getFetchAction(searchQuery));
      setSearchQuery("");
    }
  };

  return (
    <div className="d-none d-md-flex p-3 text-white sidebar-fixed">
      {/* Logo */}
      <div className="d-flex align-items-center mb-4 ps-2 mt-2">
        <i className="bi bi-apple me-2 fs-4"></i>
        <span>
          <Image
            src="/music.svg"
            alt="logo"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </span>
      </div>

      {/* Navigazione Principale */}
      <Nav className="flex-column mb-auto">
        <Form onSubmit={handleSearch} className="px-2 mb-3">
          <div className="position-relative d-flex align-items-center">
            <BiSearch className="position-absolute ms-2 opacity-50" />
            <Form.Control
              type="text"
              placeholder="Cerca"
              className="bg-dark border-0 text-white ps-5 py-2 rounded-3 shadow-none"
              style={{ fontSize: "0.9rem", backgroundColor: "#2c2c2c" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </Form>
        <Nav.Link
          href="#"
          className="text-white d-flex align-items-center  py-2"
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
          className="text-white d-flex align-items-center py-2"
        >
          <BiBroadcast className="me-3 text-danger" /> Radio
        </Nav.Link>
      </Nav>

      {/* Footer Sidebar*/}
      <div className="mt-auto mb-2">
        <Button
          variant="danger"
          className="w-100 d-flex align-items-center justify-content-center rounded-3 py-2"
        >
          <i className="bi bi-person-fill me-2"></i> Accedi
        </Button>
      </div>
    </div>
  );
};

export default SideNavBar;
