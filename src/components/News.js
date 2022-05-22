import React, { Component } from 'react'
import NewsItems from '../NewsItems'

export class News extends Component {
  // Frist the Constructor component will run then render will run then componentDidMount Will run


  constructor() {
    super();
    this.state = {
      article: [],
      page: 1
    }
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8a4d9dbab4504776b2c6f3ec0508c635';
    let data = await fetch(url);
    let parsedData = await data.json();
    // setState(this.article = parsedData.articles);
    this.setState({
      article: parsedData.articles,
      page: this.state.page
    });
  }

  prevPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a4d9dbab4504776b2c6f3ec0508c635&page=${this.state.page - 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      page: this.state.page - 1
    });
  }

  nextPage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8a4d9dbab4504776b2c6f3ec0508c635&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    if (parsedData.articles.length >= 1) {
      this.setState({
        article: parsedData.articles,
        page: this.state.page + 1
      });
    }


  }


  render() {
    return (
      <>
        <div className="container">
          <h1 className='my-5 mb-3 mx-3'>Top Stories</h1>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div key={element.url} className="col-md-3 my-3 mx-3">
                  <NewsItems imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} />
                </div>
              )
            })}
            <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <= 1} onClick={this.prevPage} className="btn btn-dark mx-3 my-3">&larr; Previous</button>
              <button className="btn btn-dark mx-3 my-3" onClick={this.nextPage}>&rarr; Next</button>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default News
