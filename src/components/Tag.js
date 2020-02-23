import React from 'react';
import './Tag.css'

const Tag = (props) => {
  return (
    <div className="container">
      {props.hashtags.map((tag, index) => (
        <div key={index} className="tag">
          <h2>#{tag.tag}</h2>
          <h4>Tag Exposure: {tag.exposure}</h4>
          <h5>Tag Usage: {tag.mentions}</h5>
        </div>
      ))}
    </div>
  )
}

export default Tag;
