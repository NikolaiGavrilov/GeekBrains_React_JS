import React from 'react'

const CartGood = ({ product, onRemove }) => {
    return (
        <div className="sh__cart__table__productLine">
            <div className="sh__cart__table__productDetails">
                <a className="sh__cart__table__productImg" href="single_page.html">
                    <img src={product.img} alt={product.altDescr} />
                </a>
                <div className="sh__cart__table__productText">
                    <h3 className="sh__cart__table__productName">{product.name}</h3>
                    <span className="sh__cart__table__productColorSize">
                        Color: <span className="sh__cart__table__productColorSize__data">{product.color}</span><br />
                        Size: <span className="sh__cart__table__productColorSize__data">{product.size}</span>
                    </span>
                </div>
            </div>
            <span className="sh__cart__table__productPrice">${product.price}</span>
            <input className="sh__cart__table__inputField" type="number" value={product.quantity} min="1" readOnly />
            <span className="sh__cart__table__productShipping">FREE</span>
            <span className="ssh__cart__table__productSubtotal">${(product.price * product.quantity)}</span>
            <a className="sh__cart__table__productAction" href="#" onClick={() => onRemove(product.id)}>
                <img src="img/remove_icon.png" alt="крестик-удалить" />
            </a>
        </div>
    );
};

export default CartGood;