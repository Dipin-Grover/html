import React from 'react';

const BlogContent = ({ content }) => {
  if (!content) return null;

  return (
    <div className="tp-postbox-wrapper mr-110 mb-50">
      <div className="tp-blog-details-content mb-70">
        <p className="fs-18 lh-150-per">{content.intro1}</p>
        <p className="fs-18 lh-150-per">{content.intro2}</p>
        <div className="tp-service-details-content mt-30 mb-30">
          <h5 className="fs-25 mb-25">{content.listTitle}</h5>
          <ul>
            {content.listItems.map((item, index) => (
              <li key={index}>
                <i className="fa-regular fa-circle-check"></i>
                <p><b>{item.title} – </b> {item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <h3 className="fw-500 fs-35 lh-130-per mb-15"><span className="d-inline-block mr-10">{content.conclusionTitle}</span></h3>
        <p className="fs-18 lh-150-per">{content.conclusionText}</p>
      </div>
    </div>
  );
};

export default BlogContent;
