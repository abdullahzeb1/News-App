import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div>
        <div className='card'>
          <span
            className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'
            style={{ left: '50%', zindex: '1' }}
          >
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? 'https://assets3.cbsnewsstatic.com/hub/i/r/2023/03/14/e8af710f-0851-46d3-840f-8971841ba9b7/thumbnail/1200x630g8/ae72d6687ec2ab2bb30b9d2289d9bc9e/sub.jpg'
                : imageUrl
            }
            className='card-img-top'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title} </h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                By {!author ? 'Unknown' : author} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className='btn btn-sm btn-dark'>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
