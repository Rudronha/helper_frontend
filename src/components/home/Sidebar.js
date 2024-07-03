import React from 'react';
import './Sidebar.model.css';
import user from '../../image/user (1).png';
import order from '../../image/shopping-bag2.png';
import cart from '../../image/order.png';
import product from '../../image/add-product.png';

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <div className="icon">
                    <img src={user} alt='user'/>
                    <div className="tag">Profile</div>
                </div>
                <div className="icon">
                    <img src={order} alt='order'/>
                    <div className="tag">Orders</div>
                </div>
                <div className="icon">
                    <img src={cart} alt='cart'/>
                    <div className="tag">Cart</div>
                </div>
                <div className="icon">
                    <img src={product} alt='product'/>
                    <div className="tag">Products</div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
