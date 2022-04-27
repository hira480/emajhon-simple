import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css';

const Orders = () => {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

    const handelRemoveProduct = product => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id);
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItems
                        key={product._id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={() => navigate('/shipment')}>Proced Shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;