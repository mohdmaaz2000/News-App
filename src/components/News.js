import React, { Component } from 'react'
import Loader from './Loader';
import NewsItems from './NewsItems'
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  // First the Constructor component will run then render will run then componentDidMount Will run

  static defaultProps = {
    country: 'in',
    heading: 'Top Stories'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
    heading: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      loading: false,
      totalResults: 0
    }
  }

  async updatePage(PageNo) {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${PageNo}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults
    });
  }

  componentDidMount() {
    this.updatePage(this.state.page);
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: this.state.article.concat(parsedData.articles),
      page: this.state.page + 1,
      totalResults: parsedData.totalResults
    });
  }



  render() {
    return (
      <>

        <h1 className='my-5 mb-3 mx-3' style={{ textAlign: 'center' }}>Student Times - {this.props.heading}</h1>
        {this.state.loading && <Loader />}
        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData}
          hasMore={!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))}
          loader={<Loader />}
          >
        <div className="container">
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div key={element.url} className="col-md-4 my-3">
                  <NewsItems imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source['name']} />
                </div>
              )
            })
            }
          </div>
        </div>
      </InfiniteScroll>
      </>
    )
  }
}

export default News
