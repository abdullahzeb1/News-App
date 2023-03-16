import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=3f962c2ff91f4a1bbb864f85309aacaa&page=1';
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles });
  }

  handlerPraviousClick = async () => {
    console.log('Pravious');

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3f962c2ff91f4a1bbb864f85309aacaa&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ page: this.state.page - 1, articles: parseData.articles });
  };

  handlerNextClick = async () => {
    console.log('next');
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=3f962c2ff91f4a1bbb864f85309aacaa&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ page: this.state.page + 1, articles: parseData.articles });
  };

  render() {
    return (
      <div className='container mt-3'>
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4 mt-3' key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ''}
                  description={element.description ? element.description : ''}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className='container d-flex justify-content-between mt-3'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className='btn btn-dark'
            onClick={this.handlerPraviousClick}
          >
            &larr; Pravious
          </button>
          <button
            type='button'
            className='btn btn-dark'
            onClick={this.handlerNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
