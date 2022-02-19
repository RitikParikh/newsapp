import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export class News extends Component {
    static propTypes = {
            country : PropTypes.string,
            pageSize : PropTypes.number,
            category : PropTypes.string
    };
    static defaultProps = {
        country : "in",
        pageSize : 10,
        category : 'general'
     }
    constructor(props){
        super(props);  
        this.state={
            articles :[],
            loading : true,
            page : 1
        };
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} -  NewsMonkey`;
      }
      url = (size) =>{
        return `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${size}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=${this.props.apiKey}`
      }
     async componentDidMount(){
        let data = await fetch(this.url(0));
        this.setState({loading:true});
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles, 
            totalArticleCount: parsedData.totalResults,
            loading:false
        });
      }

      
    paginationClick = async (ele)=>{
        
            const page = ele === "next"  ? this.state.page + 1 : this.state.page - 1;
            let data = await fetch(this.url(page));
            this.setState({loading:true});
            let parsedData = await data.json();
            this.setState({
                page : page,
                articles: parsedData.articles,
                loading:false
            });
        
      };  

      render() {
        return <div className = "container my-3">
            <h1 className="text-center" style={{margin : "35px 0px"}}>NewsMonkey- Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
            {!this.state.loading && this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title} description={element.description} 
                            newsUrl={element.url}
                            imageUrl={element.urlToImage} source={element?.source?.name ? element?.source?.name : "Unkown" } author={element.author} date={element.publishedAt}/>
                        </div>
            })}
            {/* {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                            <NewsItem  title={element.title} description={element.description} 
                            newsUrl={element.url}
                            imageUrl={element.urlToImage} source={element?.source?.name ? element?.source?.name : "Unkown" } author={element.author} date={element.publishedAt}/>
                        </div>
            })} */}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page <= 1 } type="button" className="btn btn-dark" onClick={() => this.paginationClick("privious")}>&#8592; Privious</button>
                <button disabled={Math.ceil(this.state.totalArticleCount/this.props.pageSize) <= this.state.page } type="button" className="btn btn-dark" onClick={async() => await this.paginationClick("next")}>Next &#8594;</button>
            </div>
        </div>;
    }
}

export default News;
