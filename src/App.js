import React from 'react';
import Logo from './comp/Header/Logo';
import Navigation from './comp/Header/Navigation';
import Profile from './comp/Header/Profile';
import MovieOfTheDay from './comp/MovieOfTheDay';
import ShowSlider from './comp/ShowSlider';
import { connect } from "react-redux";
import './App.css';
// debounce   , Library => lodash
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm:"",
      searchUrl:""
    }

    this.handleChange.bind(this)
    this.handleKeyUp.bind(this)
  }

  handleKeyUp = (event) => {
    if(this.state.searchTerm !== "") //event.key === 'Enter' && 
    {
      var searchUrl =  "search/multi?query=" + this.state.searchTerm + "&api_key=166624c030b91c943c397020f20525b4";
      this.setState({
        searchUrl: searchUrl
      })
    }
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render(){
    return (
      <div>
        <header className="Header">
          <Logo />
          <Navigation />
          <div id="search" className="Search">
            <input onChange={this.handleChange} onKeyUp={this.handleKeyUp} value={this.state.searchTerm} placeholder="Search for a title..."/>
          </div>
          <Profile />
        </header>
        <MovieOfTheDay />
        <ShowSlider title="Search Results" url={this.state.searchUrl}/>
        <ShowSlider title="Top TV picks for Jack" url='discover/tv?sort_by=popularity.desc&page=1'/>
        <ShowSlider title="Trending now" url='discover/movie?sort_by=popularity.desc&page=1'/>
        <ShowSlider title="Most watched in Horror" url='genre/27/movies?sort_by=popularity.desc&page=1'/>
        <ShowSlider title="Sci-Fi greats" url='genre/878/movies?sort_by=popularity.desc&page=1'/>
      </div>
    )
  }
}
function mapStateToProps(state) {
  console.log();
  return {
      movies: state.movies
  }
}


export default connect(mapStateToProps)(App);
