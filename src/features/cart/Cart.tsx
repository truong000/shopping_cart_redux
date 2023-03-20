import {  useSelector } from "react-redux";
import { RootState } from "../../app/store";
// import { CartItem } from "./CartItem";
import './Cart.css';
import React from "react";
import { Total } from "./Total";

const CartItem = React.lazy(() => import("./CartItem").then(module => ({ default: React.memo(module.CartItem)})));

const Cart: React.FC = (): JSX.Element => {

  const carts = useSelector((state: RootState) => state.cart.carts)
  const totalPrice = useSelector(
    (state: RootState) => state.cart.totalPrice
  );

  console.log("totalPrice", totalPrice);
  
  return (
    <section className="Cart">
      {carts.length ? (
        <section className="Cart__content">
          <article className="Cart__products">
          {carts.map(product => (
              <CartItem
                key={product.id}
                product ={product}
                />
            ))}
          </article>

          <article className="Cart__info">
            <div className="Cart__total">
              <Total totalPrice={totalPrice} />
            </div>
          </article>
        </section>
      ) : (
        <span className="Cart__msg">The cart is empty</span>
      )}
    </section>
  )
}

export default Cart;