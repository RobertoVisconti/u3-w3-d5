import { Provider } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import NavBarMobile from "./components/NavBarMobile";
import { Container } from "react-bootstrap";
import SideNavBar from "./components/SideNavBar";
import CardMain from "./components/CardMain";
import CardSubtitle from "./components/CardSubtitle";
import CardFetch from "./components/CardFetch";
import ExploreSection from "./components/ExploreSection";
import Footer from "./components/Footer";
import Player from "./components/Player";

function App() {
  return (
    <Provider store={store}>
      <Container
        fluid
        className="p-0 bg-dark min-vh-100 text-white d-flex flex-column"
      >
        <header>
          <SideNavBar />
          <NavBarMobile />
        </header>
        <main className="main-content-wrapper overflow-hidden flex-grow-1">
          <CardMain />
          <CardSubtitle />
          <CardFetch />
          <ExploreSection />
        </main>
        <footer className="footer-content">
          <Player />
          <Footer />
        </footer>
      </Container>
    </Provider>
  );
}

export default App;
