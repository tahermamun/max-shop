import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import addsPic from "../../../assets/images/offer_banner-2.jpg"
import fakeBlogData from '../../../../fakeDatabase/fakeBlogData.json'
import BlogCard from '../../common/blogCard/BlogCard';
import "./blogs.scss"
const Shop = () => {
    return (
        <>
            <section className="blog_page_area">
                <Sidebar />
                <div className="blog_page_box">
                    <div className="single_page_header">
                        <img src={addsPic} alt="" />
                        <h1 className="title">Latest Blogs</h1>
                        <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable that it has a more-or-less normal distribution of letters.
                        </p>
                    </div>
                    <div className="blogs">
                    {fakeBlogData.map(blog => <BlogCard blog={blog} />)}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;