import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterCategory } from "../store/slices/products.slice";
import { Card, Row } from "react-bootstrap";
import cart from '../images/cart.svg';
import cartAdd from '../images/cartAdd.svg';

const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const productsList = useSelector((state) => state.products);
  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      .then((res) => {
        const productSearch = res.data.data.products.find(
          (productsItem) => productsItem.id === Number(id)
        );
        setProducts(productSearch);
        dispatch(filterCategory(productSearch.category.id));
      });
  }, [dispatch, id]);

  return (
    <div>
        <div className="container">
      <Row xs={1} md={2} className="card-detail">

        <div  className="container">
          
          <img src={products.productImgs} alt="" className="img-detail" />
        </div>
        <div>
        <h2>{products.title}</h2>
          <Card.Text>{products.description}</Card.Text>
          <div className="price">
            <div>
              <p>Price</p>
            </div>
            <p>$ {products.price}</p>
          </div>
          <button className="add-to-cart" ><strong> Add to cart</strong> <img src={cartAdd} alt="" /></button>
        </div>
      </Row>
        </div>

      <div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {productsList.map((productItem) => (
            <div
              className="card"
              key={productItem.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/product/${productItem.id}`)}
            >
              <div>
                <h4 className="title">{productItem.title}</h4>

                <div className="img-card">
                  <img src={productItem.productImgs} alt="" />
                </div>
              </div>

              <div className="price">
                <div>
                  <p>Price</p>
                </div>
                <p>$ {products.price}</p>
              </div>
              <div className="cart">
                    <img src={cart} alt="" />
                  </div>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
