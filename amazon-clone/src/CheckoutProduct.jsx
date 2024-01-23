import React from 'react';
import "./CheckoutProduct.css";

function CheckoutProduct({ image, rating, title, price, id, hideButton}) {
 
  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image"
       src={image}
       alt='Checkout Image'
       />
      <div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<small>$</small>
				<strong>{price}</strong>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>🌟</p>
						))}
				</div>
				<button >Remove from Basket</button>
			</div>
    </div>
  )
}

export default CheckoutProduct
