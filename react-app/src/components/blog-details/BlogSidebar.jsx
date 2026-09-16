import React from 'react';

const BlogSidebar = () => {
  return (
    <div className="tp-sidebar-wrap mb-50">
      <div className="tp-sidebar-search mb-25">
        <form action="#">
          <div className="tp-sidebar-search-input">
            <input type="text" placeholder="Search" />
            <button type="submit">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M16.9984 17L15.3984 15.4" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className="tp-sidebar-widget mb-30">
        <h3 className="tp-sidebar-widget-title mb-25">Category</h3>
        <div className="tp-sidebar-widget-content">
          <ul>
            <li><a href="/blog-grid">Branding <span>(10)</span></a></li>
            <li><a href="/blog-grid">Lifestyle <span>(08)</span></a></li>
            <li><a href="/blog-grid">UI/UX Design <span>(05)</span></a></li>
            <li><a href="/blog-grid">Production <span>(02)</span></a></li>
            <li><a href="/blog-grid">Creative Art <span>(06)</span></a></li>
          </ul>
        </div>
      </div>
      <div className="tp-sidebar-widget mb-30">
        <h3 className="tp-sidebar-widget-title mb-25">Recent Post</h3>
        <div className="tp-sidebar-rc-post mb-15">
          <a href="#" className="tp-sidebar-rc-post-tag mb-15">Web Design</a>
          <h4 className="tp-sidebar-rc-post-title"><a className="underline-black" href="/blog-details">Behind the Scenes: Our Creative Process for High-Impact Branding</a></h4>
          <span className="tp-sidebar-rc-post-dates">02 Feb, 2025</span>
          <span className="tp-sidebar-rc-border d-block mt-5">
            <svg viewBox="0 0 364 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM359 3.5L364 5.88675V0.113249L359 2.5V3.5ZM4.5 3.5H359.5V2.5H4.5V3.5Z" fill="#EEEEEE"></path>
            </svg>
          </span>
        </div>
        <div className="tp-sidebar-rc-post mb-15">
          <a href="#" className="tp-sidebar-rc-post-tag mb-15">Development</a>
          <h4 className="tp-sidebar-rc-post-title"><a className="underline-black" href="/blog-details">Why User-Centered Design is the Key to Digital Success.</a></h4>
          <span className="tp-sidebar-rc-post-dates">02 Feb, 2025</span>
          <span className="tp-sidebar-rc-border d-block mt-5">
            <svg viewBox="0 0 364 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 2.5L0 0.113249V5.88675L5 3.5V2.5ZM359 3.5L364 5.88675V0.113249L359 2.5V3.5ZM4.5 3.5H359.5V2.5H4.5V3.5Z" fill="#EEEEEE"></path>
            </svg>
          </span>
        </div>
        <div className="tp-sidebar-rc-post mb-15">
          <a href="#" className="tp-sidebar-rc-post-tag mb-15">Creative</a>
          <h4 className="tp-sidebar-rc-post-title"><a className="underline-black" href="/blog-details">From Concept to Launch:<br/> How We Build Scalable Digital Products.</a></h4>
          <span className="tp-sidebar-rc-post-dates">02 Feb, 2025</span>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
