import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useParams } from 'react-router-dom';
import{filterCategory}from '../store/slices/products.slice'
import {Card,Row, Col} from "react-bootstrap";



const ProductDetail = () => {
const[products,setProducts]=useState([]);

const{id}=useParams()
const dispatch=useDispatch()

const productsList=useSelector(state=>state.products)
useEffect(()=>{
  axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
  .then((res)=>
     {const productSearch = res.data.data.products.find(productsItem=>productsItem.id===Number(id))
  setProducts(productSearch)
    dispatch(filterCategory(res.data.data.category))
    }

  )
},[dispatch,id])

    return (
      <div className="card-detail">
        <h1>{products.title}</h1>
        <img src={products.productImgs} alt="" className="img-detail" />
        <Card.Text>{products.description}</Card.Text>
        <Card className="price">
                    $ {products.price}
                  </Card>
        <div>
          <h2>Sugerencias</h2>
          <Row xs={1} md={2} lg={3} className="g-4">
          {productsList.map((productItem) => (
            <Col>
              <Card key={productItem.id} style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={productItem.productImgs} />
                
                <Card.Body>
                  <Card.Title>{productItem.title}</Card.Title>
                  <Card.Text>{productItem.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  {productItem.price}
                </Card.Footer>
              </Card>
            </Col>
          ))}
          </Row>
        </div>
      </div>
    );
};

export default ProductDetail;