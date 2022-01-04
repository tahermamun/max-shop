import React from 'react';
import Sidebar from '../../common/sidebar/Sidebar';
import "./singleBlog.scss"
import img from '../../../assets/images/blogs/blog_pic_2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faMinus, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faComment, faEdit, faHeart } from '@fortawesome/free-regular-svg-icons';


const SingleBlog = () => {
    return (
        <section className="single_blog_page">

            <div className="blog_container">

                <div className="blog_content">
                    <div className="date_cate">
                        <p>16 <span>July</span></p>
                        <p><span>Life Style</span></p>
                    </div>

                    <div className="img_box">
                       <div className="img">
                       <img src={img} alt="" />
                       </div>


                        <div className="img_bottom_box">
                            <ul>
                                <li><FontAwesomeIcon className="icon" icon={faEdit} />By Admin</li>
                                <li><FontAwesomeIcon className="icon" icon={faComment} />5 Comments</li>
                                <li><FontAwesomeIcon className="icon" icon={faHeart} />47 Likes</li>
                                <li><FontAwesomeIcon className="icon" icon={faClipboardList} />Life style</li>
                            </ul>
                        </div>


                    </div>

                    <div className="content">
                        <h1 className="blog_title">Lorem ipsum dolor sit amet consectetur adipiscing elit primis, facilisis</h1>

                        <p className="blog_description">
                            Lorem ipsum dolor sit amet consectetur adipiscing, elit ac curabitur platea sodales nec, diam bibendum conubia enim vitae. Nunc taciti facilisi cras at dictum natoque interdum mauris dapibus quis pharetra, tincidunt eu tortor bibendum dictumst sodales duis maecenas magna phasellus consequat cursus, nisi velit senectus tristique conubia sociosqu hac sociis quam himenaeos. At lacus cursus in interdum mauris primis venenatis litora, taciti neque parturient nunc non sem himenaeos phasellus molestie, commodo imperdiet eu morbi quam a metus.

                            Ornare eu egestas venenatis blandit enim vitae habitant auctor felis malesuada, facilisis condimentum fames etiam nullam conubia inceptos nam cubilia. Iaculis commodo justo augue nascetur pharetra venenatis magna class, senectus suspendisse gravida lacus turpis volutpat vel leo, tortor bibendum platea rhoncus vulputate odio ligula. Magna cras gravida accumsan semper mi purus quis laoreet odio, nunc lacus blandit diam suspendisse volutpat vivamus molestie. Sodales ad senectus parturient massa ullamcorper arcu lacus nisi, cras erat condimentum mus scelerisque auctor pretium aliquam, elementum urna rhoncus conubia vivamus blandit nascetur. Justo cras gravida conubia mauris rutrum cubilia urna, sagittis porta habitasse sed fringilla erat vestibulum ac, nullam pharetra semper libero curabitur tempus. Vestibulum ridiculus ut vel urna taciti torquent class varius dis, ultrices aliquet fringilla pulvinar lacinia pellentesque ornare phasellus, eu pharetra odio blandit posuere nec nulla luctus.
                            Lorem ipsum dolor sit amet consectetur adipiscing, elit ac curabitur platea sodales nec, diam bibendum conubia enim vitae. Nunc taciti facilisi cras at dictum natoque interdum mauris dapibus quis pharetra, tincidunt eu tortor bibendum dictumst sodales duis maecenas magna phasellus consequat cursus, nisi velit senectus tristique conubia sociosqu hac sociis quam himenaeos. At lacus cursus in interdum mauris primis venenatis litora, taciti neque parturient nunc non sem himenaeos phasellus molestie, commodo imperdiet eu morbi quam a metus.

                            Ornare eu egestas venenatis blandit enim vitae habitant auctor felis malesuada, facilisis condimentum fames etiam nullam conubia inceptos nam cubilia. Iaculis commodo justo augue nascetur pharetra venenatis magna class, senectus suspendisse gravida lacus turpis volutpat vel leo, tortor bibendum platea rhoncus vulputate odio ligula. Magna cras gravida accumsan semper mi purus quis laoreet odio, nunc lacus blandit diam suspendisse volutpat vivamus molestie. Sodales ad senectus parturient massa ullamcorper arcu lacus nisi, cras erat condimentum mus scelerisque auctor pretium aliquam, elementum urna rhoncus conubia vivamus blandit nascetur. Justo cras gravida conubia mauris rutrum cubilia urna, sagittis porta habitasse sed fringilla erat vestibulum ac, nullam pharetra semper libero curabitur tempus. Vestibulum ridiculus ut vel urna taciti torquent class varius dis, ultrices aliquet fringilla pulvinar lacinia pellentesque ornare phasellus, eu pharetra odio blandit posuere nec nulla luctus.
                        </p>
                    </div>
                </div>
                <Sidebar />
            </div>
        </section>
    );
};

export default SingleBlog;