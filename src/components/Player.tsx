import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import {
  BsPlayFill,
  BsShuffle,
  BsSkipStartFill,
  BsSkipEndFill,
  BsRepeat,
  BsVolumeUp,
  BsListUl,
} from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const Player = () => {
  return (
    <div className="fixed-bottom d-flex justify-content-center mb-4">
      <Container
        className="py-2 px-4 shadow-lg border border-secondary border-opacity-25"
        style={{
          width: "90%",
          maxWidth: "800px",
          backgroundColor: "rgba(45, 45, 45, 0.8)",
          backdropFilter: "blur(15px)",
          borderRadius: "50px",
          color: "white",
        }}
      >
        <Row className="align-items-center">
          {/* Sinistra: Controlli principali */}
          <Col xs={4} className="d-flex align-items-center">
            <BsShuffle
              className="text-secondary me-3 d-none d-md-block"
              style={{ cursor: "pointer" }}
            />
            <BsSkipStartFill
              className="fs-4 mx-1"
              style={{ cursor: "pointer" }}
            />
            <BsPlayFill className="fs-1 mx-1" style={{ cursor: "pointer" }} />
            <BsSkipEndFill
              className="fs-4 mx-1"
              style={{ cursor: "pointer" }}
            />
            <BsRepeat
              className="text-secondary ms-3 d-none d-md-block"
              style={{ cursor: "pointer" }}
            />
          </Col>

          {/* Centro: Logo Apple  */}
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <FaApple className="fs-3 opacity-75" />
          </Col>

          {/* Destra: Volume e Lista */}
          <Col xs={4} className="d-flex align-items-center justify-content-end">
            <BsListUl
              className="me-3 opacity-75 d-none d-sm-block"
              style={{ cursor: "pointer" }}
            />
            <BsVolumeUp className="me-2 opacity-75" />
            <div style={{ width: "80px" }}>
              <ProgressBar now={60} variant="light" style={{ height: "4px" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
