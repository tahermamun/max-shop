import React from 'react';
import "./blogCategory.scss"


const BlogCategory = () => {
    return (
        <>
            <div class="blog_category">
                <h2 class="title">Blog Category</h2>
                <ul>
                    <li><a href="#">Vestibulum consequat</a></li>
                    <li><a href="#">Pellentesque condimentum</a></li>
                    <li><a href="#">Suspendisse turpis</a></li>
                </ul>
            </div>
        </>
    );
};

export default BlogCategory;