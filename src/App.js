import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Purchases, Login, ProductDetail } from "./pages";
import { LoadingScreen } from "./components";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./App.css";
function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div>
      <HashRouter>
        <Container>
          <div className="nav-bar">
            <nav class="navbar bg-light">
              <div class="container">
                <a class="navbar-brand" href="#">
                  <img
                    src="/docs/5.2/assets/brand/bootstrap-logo.svg"
                    alt=""
                    width="30"
                    height="24"
                  />
                </a>
              </div>
            </nav>
          </div>

          {isLoading && <LoadingScreen />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/Purchases" element={<Purchases />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
