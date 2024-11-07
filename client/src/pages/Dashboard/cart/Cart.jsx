import React from 'react';
import useCart from '../../../hooks/useCart';

const Cart = () => {
    const [cart] = useCart()
    return (
        <div>
            <h3>My cart</h3>
        </div>
    );
};

export default Cart;