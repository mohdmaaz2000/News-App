import React, { Component } from 'react'
import NewsItems from '../NewsItems'

export class News extends Component {
  // Frist the Constructor component will run then render will run then componentDidMount Will run

  
  constructor() {
    super();
    this.state = {
      article:[],
      loading: false
    }
    console.log('Hii');
  }

  async componentDidMount(){
    let url = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=8a4d9dbab4504776b2c6f3ec0508c635';
    let data = await fetch(url);
    let parsedData = await data.json();
    // setState(this.article = parsedData.articles);
    this.setState({
      article : parsedData.articles
    })
  }


  render() {
    return (
      <>
        <div className="container">
          <h2 className='my-3 mx-3'>Top Stories</h2>
          <div className="row">
            {this.state.article.map((element) => {
              return (
                <div key={element.url} className="col-md-3 my-3 mx-3">
                  <NewsItems imageUrl={element.urlToImage} title={element.title} description={element.description} url={element.url} />
                </div>
              )
            })}


          </div>
        </div>
      </>
    )
  }
}

export default News
