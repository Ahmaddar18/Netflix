import React from 'react';
import $ from 'jquery';
class TopTVSlider extends React.Component {
    constructor(props){
      super(props)
      this.scroll = this.scroll.bind(this)
    }
    scroll(direction){
      let far = $( '.topTV-container' ).width()/2*direction;
      let pos = $('.topTV-container').scrollLeft() + far;
      $('.topTV-container').animate( { scrollLeft: pos }, 1000)
    }
  render() {
      return (
      <div className="main">
        <div className="wrapper">
          <a className="prev" onClick={this.scroll.bind(null,-1)}>&#10094;</a>
          <div className="topTV-container">
             {this.props.imgContainer}
          </div>
          <a className="next" onClick={this.scroll.bind(null,1)}>&#10095;</a>
        </div>
      </div>
    )
    }
  }
  export default TopTVSlider;