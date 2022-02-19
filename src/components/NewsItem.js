import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
      let {title, description,imageUrl, newsUrl, author, date, source} = this.props;
    return <div className="my-3">
        <div className="card" style={{width: "18rem"}}> 
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "87%",zindex:"1"}}>{source}</span>
                
            <img src={!imageUrl ? `https://images.hindustantimes.com/tech/img/2022/02/04/1600x900/SPACE-EXPLORATION-ASTEROID-0_1644002463059_1644002516400.JPG` :imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">
                  {title}
                </h5>
                <p className="card-text">{description}</p>
                <p class="card-text"><small className="text-danger">By {!author ? "Unkown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target = "_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
            </div>
            </div>
    </div>;
  }
}

export default NewsItem;
