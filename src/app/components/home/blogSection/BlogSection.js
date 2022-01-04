import React from 'react';
import fakeBlogData from "../../../../fakeDatabase/fakeBlogData.json";
import BlogCard from '../../common/blogCard/BlogCard';
import "./blogSection.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const BlogSection = () => {
    return (
        <>
            <section class="blog_section">
                <div class="title_area clearfix">
                    <h2>Our latest blog</h2>
                    <div>
                    <div>
                            <button> <FontAwesomeIcon className="icon" icon={faChevronLeft} /></button>
                            <button> <FontAwesomeIcon className="icon" icon={faChevronRight} /></button>
                        </div>
                    </div>
                </div>

                <div class="blog_area">
                    {fakeBlogData.map(blog => <BlogCard blog={blog} />)}


                </div>

            </section>
        </>
    );
};

export default BlogSection;