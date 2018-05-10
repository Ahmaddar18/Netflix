import React from 'react'
class Movies extends React.Component {
    render() {
      return(
        <div className="Item" style={{backgroundImage: 'url(' + this.props.backdrop + ')'}}>
          <div className="overlay">
            <div className="title">{this.props.title}</div>
            <div className="rating">{this.props.score} / 10</div>
            <div className="plot">{this.props.overview}</div>
            <ListToggle />
          </div>
        </div>
      )
    }
  }
  class ListToggle extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        toggled:false
      }
    }
  
    handleClick = () => {
      if(this.state.toggled === true) {
        this.setState({
          toggled: false
        })
      } else {
        this.setState({
          toggled: true
        })
      }
    }
    render() {
      return(
        <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
          <div>
            <i className="fa fa-fw fa-plus"></i>
            <i className="fa fa-fw fa-check"></i>
          </div>
        </div>
      )
    }
  }
  export default Movies;