import { useDispatch } from "react-redux";
import { ProductInterface, removeFromCart, updateCartItem } from "./cartSlice";
import './CartItem.css';
import { useState } from "react";

interface CartItemProps {
  product: ProductInterface
}

export const CartItem: React.FC<CartItemProps> = ({ product }): JSX.Element => {
  const [quantity, setQuantity] = useState(product.quantity || 0);
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id: product.id }));
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    dispatch(updateCartItem({ id: product.id, quantity: newQuantity }));
  };

  return (
    <div className="cartItem">
      <img className="cartItem__image" src={product.image} alt='item' />

      <div className="cartItem__info">
        <p className="cartItem__title">{product.title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <input type="number" value={product.quantity} onChange={handleQuantityChange} />
        </div>
        <button
          className='cartItem__removeButton'
          onClick={handleRemove}
        >Remove</button>
      </div>
    </div>
  );
};