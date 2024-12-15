import React, { Component } from 'react'
import Newsitem from './Newsitem'


export class News extends Component {
    constructor()
    {
        super();
        console.log("Hello I am Constructor From NewsComponent");
        this.state={
           articles : [],
           loading:false,
           page:1
        }
    }

   async componentDidMount()
{
    console.log("cdm");
    let url=`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ac7724696b8b43e6a81a70e0fd058758&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    console.log(data);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles,totalArticles:parsedData.totalResults});
}

 handleNextClick=async()=>{
    console.log("next Page");
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){ }
    else{
    let url=`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ac7724696b8b43e6a81a70e0fd058758&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData=await data.json();
    this.setState({});
    this.setState({
        page:this.state.page+1,
        articles:parsedData.articles
    })
}
}

handlePreviousClick=async()=>{
    console.log("Previous Page");
    let url=`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=ac7724696b8b43e6a81a70e0fd058758&page=${ this.state.page-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData=await data.json();
    this.setState({});
    this.setState({
        page:this.state.page-1,
        articles:parsedData.articles
    })
}



  render() {
    console.log("render");
    return (
      <div className="container my-3">
      <h1 className="text-center">TechUpdates -Latest Tech News</h1>
        
        <div className="row"> 
        {this.state.articles.map((element)=>{
            return(
           <div className="col-md-4">
           < Newsitem key={element.url} title={element.title} 
           description={element.description?element.description.slice(0,88):" "} 
           imgeUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
            )
        })}
         </div> 
       
       <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark"onClick={this.handlePreviousClick}>&larr;  Previous</button>
            <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" class="btn btn-dark"onClick={this.handleNextClick}>Next  &rarr;</button>
       </div>
        </div>
      
    )
  }
}

export default News
