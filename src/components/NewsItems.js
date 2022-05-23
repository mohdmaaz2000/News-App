import React, { Component } from 'react'

export class NewsItems extends Component {
  
  render() {
  
    let {imageUrl,title,description,url} = this.props;
    return (
      <>
        <div className="card">
          <img src={!imageUrl? 'https://images.hindustantimes.com/tech/img/2022/05/22/1600x900/iPhone_13_Mini_(8)_1633112145406_1653219681839.jpg':imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={url} rel="noreferrer" target="_blank" style={{display:'table',margin:'auto'}} className=" btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
        
      </>
    )
  }
}

export default NewsItems
