import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { filterCategory } from "../store/slices/products.slice";
import { Card, Row } from "react-bootstrap";
import cart from '../images/cart.svg';
import cartAdd from '../images/cartAdd.svg';
import { addToCart } from "../store/slices/cart.slice";


const ProductDetail = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
const [quantity,setQuantity]= useState(1)

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

  const addProductsCart = ()=>{
    const addproduct={
       id,
       quantity
    }
    dispatch(addToCart(addproduct))
console.log(addproduct)
  }

  return (
    <div>
        <div className="container">
      <Row xs={1} md={2} className="card-detail">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
 <div>
   
 </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={products.productImgs?.[0]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={products.productImgs?.[1]} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={products.productImgs?.[2]} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> 
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="Name"></span>
  </button>
<div  className="img-detail-select">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className=" btn btn-outline" aria-current="true" aria-label="Slide 1"> <img src={products.productImgs?.[0]} className="d-block w-100" alt="..."/></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="btn btn-outline"aria-label="Slide 2"> <img src={products.productImgs?.[1]} className="d-block w-100" alt="..."/></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="btn btn-outline"aria-label="Slide 3"> <img src={products.productImgs?.[2]} className="d-block w-100" alt="..."/></button>
  </div>
</div>
      
        <div>
        <h2>{products.title}</h2>
          <Card.Text>{products.description}</Card.Text>
          <div className="body-price">

              <p>Price</p>
          <div className="contador" >
            
           
            <p>$ {products.price}</p>
            <div className="add" >
              <button onClick={()=>{setQuantity(quantity-1)}}>-</button>
              
                <input className="quantity-addcart" type="text" onChange={e=>setQuantity(e.target.value)} value={quantity} />
               
              <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
            </div>
            </div>
          </div>
          <button className="add-to-cart" onClick={addProductsCart}><strong> Add to cart</strong> <img src={cartAdd} alt="" /></button>
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
              <div className="cart" >
                <button  onClick={addProductsCart}>
                    <img src={cart} alt="" />

                </button>
              </div>
                  </div>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductDetail;
