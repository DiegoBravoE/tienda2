import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Purchases, Login, ProductDetail } from "./pages";
import { LoadingScreen } from "./components";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import shopexpress from '../src/images/shopexpress.svg'
import user from '../src/images/user.svg'
import purchasing from '../src/images/purchasing.svg'
import cartNavBar from '../src/images/cartNavBar.svg'
import "./App.css";
function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div>
      <HashRouter>
        <Container>
          <div className="nav-bar">
            <nav >
              <div className="container">
                <a className="navbar" href="#/">
                  <img
                    src={shopexpress}
                    alt=""
                    width="150"
                    height="60"
                  />
              <div className="iconos">
                <button className="button"><img src={user} alt="" /> </button>
                <button className="button"> <img src={purchasing} alt="" /> </button>
                <button className="button"> <img src={cartNavBar} alt="" /> </button>
              </div>
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
