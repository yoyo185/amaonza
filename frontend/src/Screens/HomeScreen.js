import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';

function HomeScreen(props) {
    return <ul className="products">
        {
            data.products.map(product =>
                <li>
                    <div className="product">
                        <div className="product-name">
                            <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product" /></Link>
                        </div>

                        <div className="product-name">
                            <Link to={'/product/' + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews}reviews)</div>
                    </div>
                </li>)
        }

    </ul>
}
export default HomeScreen;