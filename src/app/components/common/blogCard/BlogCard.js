import React from 'react';
import './blogCard.scss'

const BlogCard = ({blog}) => {
    return (
        <>
              <div class="blog_card">
                        <img src={blog.img} alt=""/>
                        <div class="card_body">
                            <h3> Lorem ipsum dolor sit</h3>
                            <p class="date">18 December 2021</p>
                            <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, cumque.</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
        </>
    );
};

export default BlogCard;