import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import {
  BsPlayFill,
  BsPauseFill,
  BsSkipStartFill,
  BsSkipEndFill,
  BsVolumeUp,
  BsVolumeMute,
} from "react-icons/bs";
import type { RootState } from "../redux/store";

const Player = () => {
  const currentTrack = useSelector(
    (state: RootState) => state.player.currentTrack,
  );
  const audioRef = useRef<HTMLAudioElement>(null);

  // Stati per la gestione audio
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Sincronizzazione cambio traccia
  useEffect(() => {
    if (audioRef.current && currentTrack) {
      audioRef.current.load();
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [currentTrack]);

  // Funzione Play/Pause
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Gestione Tempo
  const onTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  // Gestione Volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!currentTrack) return null;

  return (
    <div
      className="fixed-bottom d-flex justify-content-center mb-4"
      style={{ zIndex: 1050 }}
    >
      <audio
        ref={audioRef}
        src={currentTrack.preview}
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
      />

      <Container
        className="py-2 px-4 shadow-lg border border-secondary border-opacity-25"
        style={{
          width: "95%",
          maxWidth: "800px",
          backgroundColor: "rgba(45, 45, 45, 0.8)",
          backdropFilter: "blur(15px)",
          borderRadius: "50px",
          color: "white",
        }}
      >
        <Row className="align-items-center">
          {/* Sinistra: Controlli e Tempo Corrente */}
          <Col xs={4} className="d-flex align-items-center">
            <BsSkipStartFill
              className="fs-4 mx-1"
              style={{ cursor: "pointer" }}
            />

            {/* Toggle Play/Pause */}
            {isPlaying ? (
              <BsPauseFill
                className="fs-1 mx-1"
                style={{ cursor: "pointer" }}
                onClick={togglePlay}
              />
            ) : (
              <BsPlayFill
                className="fs-1 mx-1"
                style={{ cursor: "pointer" }}
                onClick={togglePlay}
              />
            )}

            <BsSkipEndFill
              className="fs-4 mx-1"
              style={{ cursor: "pointer" }}
            />

            <span className="ms-3 small opacity-75 d-none d-md-block">
              {formatTime(currentTime)}
            </span>
          </Col>

          {/* Centro: Info Brano */}
          <Col
            xs={4}
            className="d-flex flex-column align-items-center text-truncate"
          >
            <span className="fw-bold small text-truncate w-100 text-center">
              {currentTrack.title}
            </span>
            <span
              className="text-secondary small text-truncate w-100 text-center"
              style={{ fontSize: "0.75rem" }}
            >
              {currentTrack.artist.name}
            </span>

            {/* Barra di avanzamento tempo */}
            <div className="w-100 mt-1 d-none d-md-block">
              <ProgressBar
                now={duration ? (currentTime / duration) * 100 : 0}
                variant="danger"
                style={{ height: "3px" }}
              />
            </div>
          </Col>

          {/* Destra: Volume */}
          <Col xs={4} className="d-flex align-items-center justify-content-end">
            {volume === 0 ? (
              <BsVolumeMute className="me-2" />
            ) : (
              <BsVolumeUp className="me-2" />
            )}

            {/* Input Volume */}
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              style={{ width: "80px", accentColor: "white", cursor: "pointer" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Player;
