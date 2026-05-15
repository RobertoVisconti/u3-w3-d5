import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

const CardMain = () => {
  return (
    <Container fluid>
      <h1 className="text-white fw-bold my-2">Novità</h1>
      <Carousel indicators={false} interval={null} className="custom-carousel">
        {/* SLIDE 1 */}
        <Carousel.Item>
          <Row className="gy-4">
            {/* Card 1 */}
            <Col xs={12} md={6}>
              <Card className="bg-dark text-white border-0 h-100">
                <Card.Img src="/1a.png" alt="Mayhem" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end gradient-overlay">
                  <Card.Subtitle className="mb-2 text-light text-readable small">
                    NUOVA STAZIONE RADIO
                  </Card.Subtitle>
                  <Card.Title className="text-readable">
                    Rilassati, al resto pensiamo noi.
                  </Card.Title>
                  <Card.Text className="text-readable">
                    Ascolta Apple Music Chill.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col xs={12} md={6} className="d-none d-md-block">
              <Card className="bg-dark text-white border-0 h-100">
                <Card.Img src="/1b.png" alt="Successi" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end gradient-overlay">
                  <Card.Subtitle className="mb-2 text-light text-readable small">
                    NUOVA STAZIONE RADIO
                  </Card.Subtitle>
                  <Card.Title className="text-readable">
                    Ecco la nuova casa della musica latina.
                  </Card.Title>
                  <Card.Text className="text-readable">
                    Hit Apple Music.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* SLIDE 2 */}
        <Carousel.Item>
          <Row className="gy-4">
            {/* Card 1 */}
            <Col xs={12} md={6}>
              <Card className="bg-dark text-white border-0 h-100">
                <Card.Img src="/1c.png" alt="Mayhem" />
                <Card.ImgOverlay className="d-flex flex-column justify-content-end gradient-overlay">
                  <Card.Subtitle className="mb-2 text-light text-readable small">
                    NUOVA STAZIONE RADIO
                  </Card.Subtitle>
                  <Card.Title className="text-readable">
                    Scatenati, al resto pensiamo noi.
                  </Card.Title>
                  <Card.Text className="text-readable">
                    Club Apple Music.
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default CardMain;
