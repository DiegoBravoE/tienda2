import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPurchase } from '../store/slices/Purchase.slice';

const Purchases = () => {

  const dispatch=useDispatch()
    useEffect(() => {
      getPurchase()
    dispatch(getPurchase())
     }, [dispatch])
    return (
        <div>
            <h1>Purchases</h1>
        </div>
    );
};

export default Purchases;