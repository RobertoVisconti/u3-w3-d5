import { Col, Container, Nav, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="mb-2">
      <Row className="mb-2">
        <Col>
          <Nav className="align-items-center flex-wrap">
            <Nav.Link className="text-white p-0 fw-medium">Italia</Nav.Link>
            <span className="mx-2 text-muted">|</span>
            <Nav.Link className="text-secondary p-0">English (UK)</Nav.Link>
          </Nav>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="text-secondary" style={{ fontSize: "0.85rem" }}>
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-white">Apple Inc.</span> Tutti i diritti
          riservati.
        </Col>
      </Row>
      <Row>
        <Col>
          <Nav className="flex-wrap" style={{ fontSize: "0.85rem" }}>
            <Nav.Link
              //   as={Link}
              //   to="/condizioni"
              className="text-secondary p-0 hover-white"
            >
              Condizioni dei servizi internet
            </Nav.Link>
            <span className="mx-2 text-muted">|</span>

            <Nav.Link
              //   as={Link}
              //   to="/privacy"
              className="text-secondary p-0 hover-white"
            >
              Apple Music e privacy
            </Nav.Link>
            <span className="mx-2 text-muted">|</span>

            <Nav.Link
              //   as={Link}
              //   to="/cookie"
              className="text-secondary p-0 hover-white"
            >
              Avviso sui cookie
            </Nav.Link>
            <span className="mx-2 text-muted">|</span>

            <Nav.Link
              //   as={Link}
              //   to="/supporto"
              className="text-secondary p-0 hover-white"
            >
              Supporto
            </Nav.Link>
            <span className="mx-2 text-muted">|</span>

            <Nav.Link
              //   as={Link}
              //   to="/feedback"
              className="text-secondary p-0 hover-white"
            >
              Feedback
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
