import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handelRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItems
                        key={product.id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}
                    ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;