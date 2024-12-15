import React, { Component } from 'react'

export class Newsitem extends Component {
 
  render() {
   let  { title,description,imgeUrl,newsUrl ,author,date}=this.props;
    return (
      <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
        <img src={imgeUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-body-secondary}">Author : <b>{author}</b> <br/> On {date}</small></p>
            <a  rel="noreferrer" href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
