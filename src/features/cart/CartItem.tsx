import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ProductInterface } from "./cartSlice";

export const CartItem: React.FC<ProductInterface> = (productdetailCart): JSX.Element => {

    const { image,price,title, quantity } = productdetailCart
    return (
        <div className="ProductCart">
        <div className="ProductCart__thumbnail">
            <img className="ProductCart__img" src={image} alt={title} />
        </div>

        <div className="ProductCart__content">
            <div className="prodiv">
                <h2 className="productName">{title}</h2>
                <span className="productPrice">$:{price}</span>
                <p className="buttonUpdate">
                    <label>Quantiy: {quantity}
                        {/* <button onClick={decrease} className="button button1">-</button>
                        <button onClick={increment} className="button button1">+</button> */}
                    </label>
                    <button>Update</button>
                </p>
            </div>
            <button>Delete</button>   
        </div>
    </div>
    )
}