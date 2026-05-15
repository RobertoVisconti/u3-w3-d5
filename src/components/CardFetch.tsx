import { useEffect } from "react";
import { Card, Carousel, Col, Row, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { getFetchAction } from "../redux/actions";
import { setCurrentTrackAction } from "../redux/actions";
import type { Track } from "../interfaces/interfaces";

const CardFetch = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handlePlay = (track: Track) => {
    dispatch(setCurrentTrackAction(track));
  };

  const tracks = useSelector((state: RootState) => state.fetch.fetch);
  const error = useSelector((state: RootState) => state.fetch.isError);

  useEffect(() => {
    dispatch(getFetchAction());
  }, [dispatch]);

  const isMobile = window.innerWidth < 768;
  const chunkSize = isMobile ? 6 : 12;
  const chunks = [];
  for (let i = 0; i < tracks.length; i += chunkSize) {
    chunks.push(tracks.slice(i, i + chunkSize));
  }

  if (error)
    return (
      <Alert variant="danger" className="mt-3">
        {error}
      </Alert>
    );

  if (tracks.length === 0 && !error)
    return (
      <Spinner
        animation="border"
        variant="light"
        className="d-block mx-auto mt-5"
      />
    );

  return (
    <section className="mt-3 text-white">
      <div className="d-flex align-items-center mb-3">
        <h3 className="fw-bold mb-0 me-2">Nuove uscite</h3>
        <span className="text-secondary fs-4" style={{ cursor: "pointer" }}>
          &rsaquo;
        </span>
      </div>

      <Carousel indicators={false} interval={null}>
        {chunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row className="g-3">
              {chunk.map((track) => (
                <Col key={track.id} xs={6} lg={2} className="mb-4">
                  <Card
                    onClick={() => handlePlay(track)}
                    style={{ cursor: "pointer" }}
                    className="bg-transparent border-0 text-white h-100 music-card"
                  >
                    <div className="position-relative">
                      <Card.Img
                        src={track.album.cover_big}
                        className="rounded-3 shadow-sm"
                        style={{ aspectRatio: "1/1", objectFit: "cover" }}
                      />
                    </div>
                    <Card.Body className="p-0 mt-2">
                      <Card.Title className="fs-6 fw-normal mb-0 text-truncate">
                        {track.title}
                      </Card.Title>
                      <Card.Text className="text-secondary small text-truncate">
                        {track.artist.name}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default CardFetch;
