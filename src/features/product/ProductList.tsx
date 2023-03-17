import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { ProductInterface } from "./productSlice";
import './ProductList.css';

const ProductList: React.FC<ProductInterface> = (product): JSX.Element => {
  const { id, category, image, price, title } = product
  const navigate: NavigateFunction = useNavigate()
  const handleClick = () => {

    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 0);
    navigate(`/products/${id}`)
  }
  return (

    <div className="Product">
      <div className="Product__thumbnail"
        onClick={handleClick}
      >
        <img className="Product__image" src={image} alt={title} />
      </div>

      <div className="Product__body">
        <h2 className="Product__title"
          onClick={handleClick}
        >
          {title}
        </h2>
        <span>${price}</span>
        <span className="Product__category">{category}</span>
      </div>

      <div className="Product__footer">
        <div className="Rating">
          <img className="Product__star" src="/assets/star.jpg" alt="" />
        </div>
        {/* <ButtonATC
                    ProductId={id}
                    // dispatch={dispatch}
                    added={added}
                /> */}
      </div>
    </div>

  )
}

export { ProductList }