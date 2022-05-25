import React,{useState,useEffect}from 'react'
import Loader from './Loader';
import NewsItems from './NewsItems'
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props)  {

  const [article,setArticle] =useState([]);
  const [page,setPage] =useState(1);
  const [loading,setLoading] = useState(false)
  const [totalResults,setTotalResults] = useState(0)
  

  const updatePage = async (PageNo) => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${PageNo}&pageSize=${props.pageSize}`;
    setLoading(true);
    
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setLoading(false);
    setTotalResults(parsedData.totalResults)
  }

  useEffect(() => {
    updatePage(page); 
}, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(article.concat(parsedData.articles));
    setPage(page + 1);
    setTotalResults(parsedData.totalResults);
  }


    return (
      <>

        <h1 className='my-5 mb-3 mx-3' style={{ textAlign: 'center' }}>Student Times - {props.heading}</h1>
        {loading && <Loader />}
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={!(page + 1 > Math.ceil(totalResults / props.pageSize))}
          loader={<Loader />}
          >
        <div className="container">
          <div className="row">
            {article.map((element) => {
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

News.defaultProps = {
  country: 'in',
  heading: 'Top Stories'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  heading: PropTypes.string
}