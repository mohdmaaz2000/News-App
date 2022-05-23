import React, { Component } from 'react'
import Loader from './Loader';
import NewsItems from './NewsItems'

export class News extends Component {
  // Frist the Constructor component will run then render will run then componentDidMount Will run


  constructor() {
    super();
    this.state = {
      article: [],
      page: 1,
      loading: false
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading : true
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    // setState(this.article = parsedData.articles);
    this.setState({
      article: parsedData.articles,
      page: this.state.page,
      totalResults : parsedData.totalResults,
      loading : false
    });
  }

  prevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading : true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1,
      loading : false
    });
  }

  nextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading : true
    })
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      article: parsedData.articles,
      page: this.state.page + 1,
      loading : false
    });
    console.log(this.state.page);
  }


  render() {
    return (
      <>
      
        <div className="container">
          <h1 className='my-5 mb-3 mx-3' style={{ textAlign: 'center' }}>Top Stories</h1>
          <div className="row">
          {this.state.loading && <Loader />}
            {!this.state.loading && this.state.article.map((element) => {
              return (
                <div key={element.url} className="col-md-3 my-3 mx-3">
                  <NewsItems imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} />
                </div>
              )
            })}
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
