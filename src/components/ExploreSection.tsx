import { Row, Col, Card } from "react-bootstrap";

const categories = [
  "Esplora per genere",
  "Worldwide",
  "Video musicali",
  "Decenni",
  "Classifiche",
  "Nuovi artisti",
  "Attività e stati d’animo",
  "Audio spaziale",
  "Hit del passato",
];

const ExploreSection = () => {
  const handleClick = (category: string) => {
    console.log(`Hai cliccato su: ${category}`);
  };

  return (
    <section className="mt-5 text-white">
      <h3 className="fw-bold mb-4">Altro da esplorare</h3>

      <Row className="g-3">
        {categories.map((cat, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card
              onClick={() => handleClick(cat)}
              className="border-0 h-100"
              style={{
                backgroundColor: "#2a2a2a",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#3a3a3a")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#2a2a2a")
              }
            >
              <Card.Body className="d-flex justify-content-between align-items-center py-3">
                <span style={{ color: "#fa586a", fontWeight: "500" }}>
                  {cat}
                </span>
                <span style={{ color: "#fa586a", fontSize: "1.5rem" }}>
                  &rsaquo;
                </span>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ExploreSection;
