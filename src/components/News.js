import React, { Component } from 'react'
import NewsItems from '../NewsItems'

export class News extends Component {
  render() {
    return (
        <>
      <div>
        This is the News Container
      </div>
      <NewsItems />
      <NewsItems />
      <NewsItems />
      <NewsItems />
      <NewsItems />
      <NewsItems />
      </>
    )
  }
}

export default News
