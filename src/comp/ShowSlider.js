import React from 'react';
import Movies from './Movies';
import SciFiSlider from './Slider/SciFiSlider';
import MostWatchedSlider from './Slider/MostWatchedSlider';
import TrendingSlider from './Slider/TrendingSlider';
import TopTVSlider from './Slider/TopTVSlider';
import SearchSlider from './Slider/SearchSlider';
import { connect } from "react-redux";
import {movies } from '../actions/movies';
class ShowSlider extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        data: [],
        mounted: false
      }
    }
  
    loadContent () {
      var requestUrl ='https://api.themoviedb.org/3/' + this.props.url + '&api_key=166624c030b91c943c397020f20525b4';
      fetch(requestUrl).then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({
          data: data
        })
      }).catch((err) => {
          console.log("There has been error");
        })
    }
  
    componentWillReceiveProps(nextProps) {
      if(nextProps.url !== this.props.url && nextProps.url !== ''){
        this.setState({
          url: nextProps.url,
          mounted: true
        }, function () {
          this.loadContent();
        })   
      }
    }
  
    componentDidMount(){
      if(this.props.url !== '') {
        this.loadContent();
        this.setState({
          mounted:true
        })
      }
    }
  
    render() {
      let titles = '';
      if(this.state.data.results){
        titles = this.state.data.results.map((title, i) => {
          if(i < 9){
            var name = '';
            var backDrop = 'http://image.tmdb.org/t/p/original' + title.backdrop_path;
            if(!title.name) {
              name = title.original_title;
            } else {
              name = title.name;
            }
  
            return (
              <Movies key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop}/>
            )
          } else {
            return (
              <div key={title.id}></div>
            )
          }
        })
      }
      let imagesRow;
      switch(this.props.title) {
          case "Search Results":
          imagesRow = <SearchSlider imgContainer={titles}/>
          break;
          case "Top TV picks for Jack":
          imagesRow = <TopTVSlider imgContainer={titles}/>
          break;
          case "Trending now":
          imagesRow = <TrendingSlider imgContainer={titles}/>
          break;
          case "Most watched in Horror":
          imagesRow = <MostWatchedSlider imgContainer={titles}/>
          break;
          case "Sci-Fi greats":
          imagesRow = <SciFiSlider imgContainer={titles}/>
          break;
        default:
          imagesRow = "";
      }
      return(
        <div ref="titlecategory" className="TitleList" data-loaded={this.state.mounted}>
          <div className="Title">
            <h1>{this.props.title}</h1>
            <div className="titles-wrapper">
              {imagesRow}
            </div>
          </div>
        </div>
      )
    }
  }

  function mapStateToProps(state) {

    return {
        movies: state.movies
    }
}


export default connect(mapStateToProps)(ShowSlider);

 // export default ShowSlider;