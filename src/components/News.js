import React, { Component } from 'react'
import Loader from './Loader';
import NewsItems from './NewsItems'
import { PropTypes } from 'prop-types';

export class News extends Component {
  // Frist the Constructor component will run then render will run then componentDidMount Will run

  static defaultProps = {
    country: 'in',
    heading: 'Top Stories'

  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
    apiKey : PropTypes.string,
    heading : PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      loading: false,
      totalResults : 0
    }
  }

  async updatePage() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      loading: false,
      totalResults : parsedData.totalResults
    });
  }

  async componentDidMount() {
    this.updatePage();
  }

  prevPage = async() => {
    this.setState({
      page: this.state.page - 1
    });
    this.updatePage();
  }

  nextPage = async() => {
    this.setState({
      page: this.state.page + 1
    });
    this.updatePage();
  }



  render() {
    return (
      <>

        <div className="container">
          <h1 className='my-5 mb-3 mx-3' style={{ textAlign: 'center' }}>Student Times - {this.props.heading}</h1>
          <div className="row">
            {this.state.loading && <Loader />}
            {!this.state.loading && this.state.article.map((element) => {
              return (
                <div key={element.url} className="col-md-4 my-3">
                  <NewsItems imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source['name']} />
                </div>
              )
            })
            }
            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <= 1} onClick={this.prevPage} className="btn btn-dark mx-3 my-3">&larr; Previous</button>
              <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} className="btn btn-dark mx-3 my-3" onClick={this.nextPage}>Next &rarr;</button>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default News
