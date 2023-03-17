import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/store";
import {  decrease, getProductDetail, increment} from "./productSlice";
import './ProductDetail.css';
import React from "react";
import { addToCart } from "../cart/cartSlice";

export function ProductDetail() {
    const { id } = useParams()
    const productDetail = useSelector((state: RootState) => state.product.productDetail);
    const dispatch = useDispatch();
  
    console.log("product_quantity", productDetail.quantity);

    React.useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => dispatch(getProductDetail(data)));
      
    }, [id]); 

    return (
        <section className="Detail">
            <div className="Product_detail_1">
                <img className="ProductDetail__image" src={productDetail.image} alt={productDetail.title} />
            </div>
            <div className="Product_detail_2">
                <h1>{productDetail.title}</h1>
                <p className="price">{productDetail.price} $</p>
                <p>{productDetail.description}</p>
                <p>
                    <label>Quantiy: {productDetail.quantity}
                        <button onClick={() => dispatch(decrease())} className="button button1">-</button>
                        <button onClick={() => dispatch(increment())}  className="button button1">+</button>
                    </label>
                </p>
                <p>
                    <button onClick={() => dispatch(addToCart({id: productDetail.id, quantity:productDetail.quantity}))} className="button button1">Add to Cart</button>
                </p>
            </div>
        </section>
    )
}

