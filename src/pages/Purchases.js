import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPurchase } from "../store/slices/Purchase.slice";


const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const purchases = useSelector((state) => state.purchase);
  
  useEffect(() => {
    dispatch(getPurchase());
  }, [dispatch]);

  return (
    <div >
        <div className="container">
      <h1>My Purchases</h1>

        </div>

      <div  className="container-card-purchase">
        {purchases.map((purchase) => (
          <div key={purchase.id} className="container-purchase">
                <div className="date-purchase">
             {purchase.createdAt}
                </div>

            {purchase.cart.products.map((product) => (
                
  <div  key={product.id}className="row align-items-start" style={{ cursor: "pointer" }} onClick={() => navigate(`/product/${product.id}`)} >
    <div className="col">
    <h6>{product.title} </h6>
    
    </div>
    <div className="col">
    <p>{product.productsInCart.quantity} </p>
    </div>
    <div className="col">
    <p>{product.price}</p>
    </div>
    
  </div>
              
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
