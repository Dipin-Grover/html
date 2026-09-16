import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import BlogHero from '../components/blog-details/BlogHero';
import BlogBanner from '../components/blog-details/BlogBanner';
import BlogDetailsArea from '../components/blog-details/BlogDetailsArea';
import { blogPosts } from '../data/blogData';

const BlogDetails = () => {
  const { id } = useParams();
  
  const postId = id ? parseInt(id, 10) : 1;
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  return (
    <>
      <main>
        <BlogHero title={post.title} category={post.category} date={post.date} />
        <BlogBanner banner={post.image} />
        <BlogDetailsArea content={post.content} />
      </main>
    </>
  );
};

export default BlogDetails;
