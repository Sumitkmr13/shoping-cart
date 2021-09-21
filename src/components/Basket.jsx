import React from 'react';
import './Basket.css';

export default function Basket(props) {
    const { cartItems } = props;
    const { onAdd } = props;
    const { onRemove } = props;
    console.log("cartItems", cartItems);
    return (
        <div className="page">
            <h3>Cart Items</h3>
            <div>{cartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {cartItems.map((item, index) => {
                return (
                    <div key={item.id} className='items'>
                        <div className='row'>
                            <div className='image'><img src={item.image} className='cart-img'></img></div>
                            <div className='item-container'><p className='item-name'>{item.name}</p>
                                <p className='item-desc'>{item.desc}</p>
                                <p className='price'>Price: <span>Rs.{item.price}</span><span className='off'>{item.aprice}</span></p>
                                <p>Qty: {item.qty}</p>
                            </div>
                            <div>
                                <button onClick={() => onAdd(item)} className='add'>Add</button>
                                <button onClick={() => onRemove(item)} className='remove'>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}