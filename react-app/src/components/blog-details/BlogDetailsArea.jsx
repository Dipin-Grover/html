import React from 'react';
import BlogContent from './BlogContent';
import BlogSidebar from './BlogSidebar';

const BlogDetailsArea = ({ content }) => {
  return (
    <div className="tp-blog-details-area pt-60 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogContent content={content} />
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
