import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { CartItem } from "./CartItem";
import { CartsInterface } from "./cartSlice";


const Cart: React.FC = (): JSX.Element => {

    const carts = useSelector((state: RootState) => state.cart.carts)
    const dispatch = useDispatch();
    console.log("carts", carts)
    return (
        <section className="Cart">
          {carts.length ? (
            <section className="Cart__content">
              <article className="Cart__products">
              {carts.map(product => (
                    <CartItem 
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        quantity={product.quantity}
                        image={product.image}
                        id={product.id}               
                         />
                ))}
              </article>
    
              <article className="Cart__info">
                <div className="Cart__total">
                <div className="Cart__total--total">
                    <h2>Total</h2>
                    <span>$0</span>
                  </div>
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