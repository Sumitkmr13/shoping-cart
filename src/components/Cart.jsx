import React from 'react'
import './Cart.css'


export default function Cart(props) {
    const onAdd = props.onAdd;
    const { products } = props.products;
    return (
        <div className='products-card-container'>

            {
                products.map((product, index) => {
                    return (
                        <div className='product-card' key={product.id}>
                            <div className='img'><img src={product.image}></img></div>
                            <div className='details'>
                                <p className='product-name'>{product.name}</p>
                                <p className='product-desc'>{product.desc}</p>
                                <p className='price'>Price: <span>Rs.{product.price}</span><span className='off'>{product.aprice}</span></p>
                            </div>
                            <button onClick={() => onAdd(product)}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
