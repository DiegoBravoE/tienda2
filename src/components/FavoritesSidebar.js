import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const FavoritesSidebar = ({ show, handleClose }) => {
const navigate = useNavigate();
const cart=useSelector((state) => state.cart)

  return (
    <div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
                cart.map(itemCart=>(
                    <div key={itemCart.id} className="row align-items-start" style={{ cursor: "pointer" }} onClick={() => navigate(`/product/${itemCart.id}`)} >
                    <div className="col">
                    <h6>{itemCart.title} </h6>
                    
                    </div>
                    <div className="col">
                    <p>{itemCart.productsInCart.quantity} </p>
                    </div>
                    <div className="col">
                    <p>{itemCart.price}</p>
                    </div>
                    
                  </div>
                ))

            }
            </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default FavoritesSidebar;
