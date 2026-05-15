import { Card, Col, Row } from "react-bootstrap";
import station from "../data/station.json";

const CardSubtitle = () => {
  return (
    <section className="mt-5 text-white">
      <div className="d-flex align-items-center mb-3">
        <h3 className="fw-bold mb-0 me-2">Nuovi episodi radio</h3>
        <span className="text-secondary fs-4" style={{ cursor: "pointer" }}>
          &rsaquo;
        </span>
      </div>

      <Row className="g-3">
        {" "}
        {station.map((item) => (
          <Col key={item.id} xs={6} md={4} lg={2} className="mb-4">
            {/* Card */}
            <Card className="bg-transparent border-0 text-white h-100">
              <div className="position-relative">
                <Card.Img
                  src={item.img}
                  className="rounded-3 shadow-sm"
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
              </div>

              {/* Testo SOTTO la card */}
              <Card.Body className="p-0 mt-2">
                <Card.Title className="fs-6 fw-normal mb-0 text-truncate">
                  {item.title}
                  {item.explicit && (
                    <span
                      className="ms-5 badge bg-secondary text-dark p-1"
                      style={{ fontSize: "0.6rem" }}
                    >
                      E
                    </span>
                  )}
                </Card.Title>
                <Card.Text className="text-secondary small text-truncate">
                  {item.subtitle}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default CardSubtitle;
