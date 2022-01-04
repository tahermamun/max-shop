import React from 'react';
import ShopCategory from './shopCategory/ShopCategory'
import BlogCategory from './blogCategory/BlogCategory';
import NewProducts from './newProducts/NewProducts';
import SidebarAds from './ads/SidebarAds';
import './sidebar.scss'

const Sidebar = () => {
    return (
        <>
             <div class="left_sidebar">
                    <ShopCategory />
                    <BlogCategory />
                    <SidebarAds/>
                    <NewProducts />
                </div>
        </>
    );
};

export default Sidebar;