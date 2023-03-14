import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Nouran Salahieh',
      title:
        'Another atmospheric river is coming for California, where neighborhoods are still flooded and hundreds of evacuated residents are in shelters - CNN',
      description:
        'Still reeling from storms that inundated neighborhoods, forced rescues and damaged roads, storm-battered California is bracing for another atmospheric river that threatens even more flooding Monday.',
      url: 'https://www.cnn.com/2023/03/13/us/california-atmospheric-river-flood-monday/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/230313100439-05-california-weather-0312.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-03-13T10:30:00Z',
      content:
        'Still reeling from storms that inundated neighborhoods, forced rescues and damaged roads, storm-battered California is bracing for another atmospheric river that threatens even more flooding Monday.\r… [+6315 chars]',
    },
    {
      source: { id: null, name: 'BBC News' },
      author: 'https://www.facebook.com/bbcnews',
      title:
        'Silicon Valley Bank: Money in failed bank is safe, US government says - BBC',
      description:
        'Authorities take emergency action to shore up the banking system after two institutions collapse.',
      url: 'https://www.bbc.com/news/world-us-canada-64935170',
      urlToImage:
        'https://ichef.bbci.co.uk/news/1024/branded_news/115F4/production/_128965117_760c6bb963734859bf860851f0e26e22223b4c510_117_5500_30945500x3094.jpg',
      publishedAt: '2023-03-13T09:42:01Z',
      content:
        'US authorities took emergency measures on Sunday to shore up the banking system after Silicon Valley Bank (SVB) and Signature Bank collapsed.\r\nPeople and businesses who have money deposited with SVB … [+4353 chars]',
    },
    {
      source: { id: null, name: 'MarketWatch' },
      author: 'Steve Goldstein',
      title:
        'First Republic Bank shares slump 60% in premarket trade - MarketWatch',
      description:
        'First Republic Bank shares fell 60% after the weekend collapse of Signature Bank and Friday’s closure of SVB Financial, even as federal regulators stepped...',
      url: 'https://www.marketwatch.com/story/first-republic-bank-shares-slump-60-in-premarket-trade-52c7afff',
      urlToImage:
        'https://s.wsj.net/public/resources/MWimages/MW-GP644_MicroS_ZG_20180906154215.jpg',
      publishedAt: '2023-03-13T09:31:14Z',
      content: null,
    },
    {
      source: { id: 'cnn', name: 'CNN' },
      author: 'Michelle Toh, Rob North, Olesya Dmitracova',
      title:
        "HSBC buys SVB's UK business, ending 'nightmare' for British tech - CNN",
      description:
        'HSBC has scooped up the UK arm of failed Silicon Valley Bank, securing the deposits of thousands of British tech firms that hold money at the lender.',
      url: 'https://www.cnn.com/2023/03/13/investing/svb-uk-business-deal-intl-hnk/index.html',
      urlToImage:
        'https://media.cnn.com/api/v1/images/stellar/prod/230313071812-hsbc-london-file-2022-restricted.jpg?c=16x9&q=w_800,c_fill',
      publishedAt: '2023-03-13T09:29:00Z',
      content:
        'HSBC has scooped up the UK arm of failed Silicon Valley Bank, securing the deposits of thousands of British tech firms that hold money at the lender. \r\nHad a buyer not been found, SVB UK would have b… [+3636 chars]',
    },
    {
      source: { id: null, name: 'CNBC' },
      author: 'Sam Meredith, Hannah Ward-Glenton',
      title:
        'Britain’s BBC agrees star soccer host Gary Lineker can return to air after impartiality dispute - CNBC',
      description:
        "The BBC, Britain's public service broadcaster, agreed on a deal with star soccer presenter Gary Lineker on Monday.",
      url: 'https://www.cnbc.com/2023/03/13/gary-lineker-bbc-battles-crisis-as-social-media-rules-fuel-mutiny.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/107207342-1678694198080-GettyImages-1248019829.jpg?v=1678697643&w=1920&h=1080',
      publishedAt: '2023-03-13T08:54:03Z',
      content:
        "LONDON The BBC, Britain's public service broadcaster, agreed on Monday that star soccer presenter Gary Lineker can return to air and pledged to hold a review of its social media guidance after an imp… [+3567 chars]",
    },
    {
      source: { id: 'associated-press', name: 'Associated Press' },
      author: 'Joe Mcdonald',
      title:
        "China's Xi wants bigger global role after Saudi-Iran deal - The Associated Press - en Español",
      description:
        'BEJIING (AP) — President Xi Jinping called Monday for China to play a bigger role in managing global affairs after Beijing scored a diplomatic coup as the host of talks that produced an agreement by Saudi Arabia and Iran to reopen diplomatic relations .',
      url: 'https://apnews.com/article/china-congress-xi-saudi-iran-deal-a97ac909a4efd30a6a0139a87ae8f26a',
      urlToImage:
        'https://storage.googleapis.com/afs-prod/media/dbd280bf98a547dcbf32a769b5b88776/3000.webp',
      publishedAt: '2023-03-13T08:23:01Z',
      content:
        'BEJIING (AP) President Xi Jinping called Monday for China to play a bigger role in managing global affairs after Beijing scored a diplomatic coup as the host of talks that produced an agreement by Sa… [+6013 chars]',
    },
  ];
  constructor() {
    super();
    console.log('this is a news conponenta');
    this.state = {
      articles: this.articles,
      // loading: false,
    };
  }

  render() {
    return (
      <div className='container mt-3'>
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4 mt-3' key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 40)}
                  description={element.description.slice(0, 80)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
