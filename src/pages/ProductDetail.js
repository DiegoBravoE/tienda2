import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import{filterCategory}from '../store/slices/products.slice'
import {Card,Row} from "react-bootstrap";



const ProductDetail = () => {
const[products,setProducts]=useState([]);
const navigate = useNavigate();
const{id}=useParams()
const dispatch=useDispatch()

const productsList=useSelector(state=>state.products)
useEffect(()=>{
  axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
  .then((res)=>
     {const productSearch = res.data.data.products.find(productsItem=>productsItem.id===Number(id))
  setProducts(productSearch)
    dispatch(filterCategory(res.data.category.id))
    }

  )
},[dispatch,id])

    return (
      <div className="card-detail">
        <h1>{products.title}</h1>
        <img src={products.productImgs} alt="" className="img-detail" />
        <Card.Text>{products.description}</Card.Text>
        <div className="price">
          <button type="button" class="btn btn-primary" >
           $ {products.price}

          </button>
        </div>
        <div>
          <h2>Sugerencias</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
          {productsList.map((productItem) => (
         
          <div className="card " key={productItem.id} 
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/product/${productItem.id}`)} >

          <div>
          <h4 className="title">{productItem.title}</h4>
          
            <div className="img-card"><img src={productItem.productImgs} alt=""/></div>  
          </div>
          <div className="description">
      <p ><strong>{productItem.description}</strong> </p>
          </div>
          <div className="read-more">
      <button type="button" className="btn btn-outline-danger">Ver mas</button>

          </div>
      <div className="price">
        <button type="button" class="btn btn-primary" >
         $ {productItem.price}

        </button>
      </div>
      </div>
          ))}
          </Row>
        </div>
      </div>
    );
};

export default ProductDetail;