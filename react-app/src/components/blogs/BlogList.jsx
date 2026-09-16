import React from "react";
import { Link } from "react-router-dom";

import { blogPosts } from "../../data/blogData";

// Pure presentational — renders col fragments directly into the parent row
// Animation is handled by Blogs.jsx which owns the row ref
const BlogList = () => (
  <>
    {blogPosts.map((post) => (
      <div key={post.id} className="col-lg-4 col-md-6">
        <div
          className="tp-blog-item tp--hover-item mb-60 tp_fade_anim"
          data-delay=".4"
          data-fade-from={post.fadeFrom}
          data-ease="bounce"
        >
          {/* Thumbnail with WebGL hover-displacement effect */}
          <Link
            to={`/blog-details/${post.id}`}
            className="tp-blog-thumb d-block mb-30 p-relative fix d-inline-block"
          >
            <div
              className="tp--hover-img"
              data-displacement="/assets/img/imghover/strip.png"
              data-intensity="0.2"
              data-speedin="1"
              data-speedout="1"
            >
              <img className="w-100" src={post.image} alt={post.title} />
              <canvas width="848" height="800" />
            </div>
          </Link>

          {/* Text Content */}
          <div className="tp-blog-content text-center">
            <div className="tp-blog-meta mb-15">
              <span>{post.category}</span>
              <span className="borders" />
              <span>{post.date}</span>
            </div>
            <h3 className="fs-25 lh-120-per">
              <Link className="underline-black" to={`/blog-details/${post.id}`}>
                {post.title}
              </Link>
            </h3>
          </div>
        </div>
      </div>
    ))}
  </>
);

export default BlogList;
