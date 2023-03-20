import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ProductList } from "../product/ProductList";
import './home.css';

// const ProductList = React.lazy(() => import("../product/ProductList").then(module => ({ default: React.memo(module.ProductList)})));

export function Home() {
    const products = useSelector((state: RootState) => state.product.products)
    return (
        <Fragment>
            <section className='Home'>
                <section className='Home__items'>
                    {
                        products.length ? (
                            <Fragment>
                                {products.map((product) => (
                                    <ProductList
                                        key={product.id}
                                        id={product.id}
                                        description={product.description}
                                        category={product.category}
                                        price={product.price}
                                        image={product.image}
                                        title={product.title}
                                        quantity={product.quantity}
                                        reviews={product.reviews}
                                    />
                                ))}
                            </Fragment>
                        ) : (
                            <h2>Loading...</h2>
                        )
                    }
                </section>
            </section>
        </Fragment >
    )
}