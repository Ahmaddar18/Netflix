import React from 'react';
import $ from 'jquery';
class SearchSlider extends React.Component {
    constructor(props){
      super(props)
      this.scroll = this.scroll.bind(this)
    }
    scroll(direction){
      let far = $( '.search-container' ).width()/2*direction;
      let pos = $('.search-container').scrollLeft() + far;
      $('.search-container').animate( { scrollLeft: pos }, 1000)
    }
  render() {
      return (
      <div className="main">
        <div className="wrapper">
          <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
          <div className="search-container">
             {this.props.imgContainer}
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
        </div>
      </div>
    )
    }
  }
  export default SearchSlider;