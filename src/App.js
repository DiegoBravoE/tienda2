import { HashRouter, Route, Routes } from "react-router-dom";
import { Home, Purchases, Login, ProductDetail,NavBar } from "./pages";
import { LoadingScreen,ProtectedRoutes } from "./components";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./App.css";
function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <div>
      <HashRouter>
        <Container>
          <NavBar />
          {isLoading && <LoadingScreen />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/Purchases" element={<Purchases />} />
            </Route>
          </Routes>
        </Container>
      </HashRouter>
    </div>
  );
}

export default App;
