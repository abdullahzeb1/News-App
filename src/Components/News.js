import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spanner from './Spanner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 6,
    category: 'general',
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3f962c2ff91f4a1bbb864f85309aacaa&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  handlerPraviousClick = async () => {
    console.log('Pravious');

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=3f962c2ff91f4a1bbb864f85309aacaa&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };

  handlerNextClick = async () => {
    console.log('next');
    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageSize)
    //   )
    // ) {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=3f962c2ff91f4a1bbb864f85309aacaa&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
    // } else {
    // }
  };

  render() {
    return (
      <div className='container mt-3'>
        <h1 className='text-center' style={{ margin: '35px' }}>
          NewsMonkey-Top Headlines
        </h1>
        {this.state.loading && <Spanner />}
        <div className='row'>
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className='col-md-4 mt-3' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
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
