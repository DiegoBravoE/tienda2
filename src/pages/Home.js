import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cart from '../images/cart.svg';
import {getProducts,filterProducts,filterCategory} from "../store/slices/products.slice";
import { useNavigate } from "react-router-dom";
import { Col, Row, ListGroup, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";


const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const products = useSelector((state) => state.products);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      )
      .then((res) => setCategories(res.data.data.categories));

    dispatch(getProducts());
  }, [dispatch]);

  
  const filterTitle = () => {
    dispatch(filterProducts(search));
  };
  const selectCategory = (id) => {
    dispatch(filterCategory(id));
  };
  return (
    <div>
      <Row className="g-4">
        <Col lg={3} className="mb-4">
          <h4>Categories</h4>
          <ListGroup>
            {categories.map((category) => (
              <ListGroup.Item
                key={category.id}
                onClick={() => selectCategory(category.id)}
              >
                {category.name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="text"
              className="form-control"
              placeholder="Search by Products"
              aria-label="Search by Products"
              aria-describedby="button-addon2"
            />
            <button
              onClick={filterTitle}
              className="btn btn-danger"
              type="button"
              id="button-addon2"
            >
              Search
            </button>
          </InputGroup>
          <Row xs={1} md={2} lg={3} className="g-4">
            {products.map((product) => (
              <div
                className="card "
                key={product.id}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div>
                  <h6 className="title">{product.title}</h6>
                  <div className="img-card">
                    <img src={product.productImgs} alt="" />
                  </div>
                </div>

                <div className="price">
                  <div>
                    <p>Price</p>
                  </div>
                  <p>$ {product.price}</p>
                </div>
                <div  className="cart-home">
                    <img src={cart} alt="" />

                </div>
              </div>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
