import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, removeFromCart, adjustQuantity, totalPrice }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartItem 
              key={item.id} 
              item={item} 
              removeFromCart={removeFromCart} 
              adjustQuantity={adjustQuantity} 
            />
          ))}
          <div className="total">
            <h3>Total: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
