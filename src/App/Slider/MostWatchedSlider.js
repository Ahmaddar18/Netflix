import React from 'react';
import $ from 'jquery';
class MostWatchedSlider extends React.Component {
    constructor(props){
      super(props)
      this.scroll = this.scroll.bind(this)
    }
    scroll(direction){
      let far = $( '.mostWatched-container' ).width()/2*direction;
      let pos = $('.mostWatched-container').scrollLeft() + far;
      $('.mostWatched-container').animate( { scrollLeft: pos }, 1000)
    }
  render() {
      return (
      <div className="main">
        <div className="wrapper">
          <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
          <div className="mostWatched-container">
             {this.props.imgContainer}
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
        </div>
      </div>
    )
    }
  }
  export default MostWatchedSlider;