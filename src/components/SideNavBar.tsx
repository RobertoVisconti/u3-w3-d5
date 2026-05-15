import { Button, Image, Nav } from "react-bootstrap";
import { BiBroadcast, BiNews, BiSearch } from "react-icons/bi";
import { BsHouseDoor } from "react-icons/bs";

const SideNavBar = () => {
  return (
    <div
      className="d-none d-md-flex flex-column vh-100 p-3 bg-dark text-white"
      style={{ width: "240px", position: "fixed" }}
    >
      {/* Logo */}
      <div className="d-flex align-items-center mb-4 ps-2">
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
        <Nav.Link
          href="#"
          className="text-white d-flex align-items-center opacity-75 hover-opacity-100 py-2"
        >
          <BiSearch className="me-3" /> Cerca
        </Nav.Link>
        <Nav.Link
          href="#"
          className="text-white d-flex align-items-center opacity-75 py-2"
        >
          <BsHouseDoor className="me-3" /> Home
        </Nav.Link>
        <Nav.Link
          href="#"
          className="text-danger d-flex align-items-center py-2 fw-bold"
        >
          <BiNews className="me-3" /> Novità
        </Nav.Link>
        <Nav.Link
          href="#"
          className="text-white d-flex align-items-center opacity-75 py-2"
        >
          <BiBroadcast className="me-3" /> Radio
        </Nav.Link>
      </Nav>

      {/* Footer Sidebar*/}
      <div className="mt-auto">
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
