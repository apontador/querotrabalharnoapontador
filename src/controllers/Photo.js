/* eslint-disable */
import React, { Component } from 'react';

import config from './config';

class PlacePhotos extends React.Component{
  render(){
    return (
    <li>
      <img src={this.props.img}/>
      <div className="autor-foto">
        <p>Postado por:<br/>{this.props.autor}</p>
      </div>
    </li>
    )
  }
}

class PlacesListPhotos extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount(){

    var self = this;
    var url = 'https://api.apontador.com.br/v2/places/B37822W2/photos'
    var options = {
      method: 'GET',
    headers: config.apontadorHeaders
    }

    fetch(url, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      self.setState({photos: data.photoResults.photos});
    })

  }

  render(){
    return(
        <div className="jcarousel-wrapper">
          <div className="jcarousel">
            <ul>
              {this.state.photos.map(item => (
                <PlacePhotos img={item.large} autor={item.creation.author.name}/>
              ))}
            </ul>
          </div>
          <a href="" className="jcarousel-control-prev">&lsaquo;</a>
          <a href="" className="jcarousel-control-next">&rsaquo;</a>
          <p className="jcarousel-pagination"></p>
        </div>
      )
  }
}

export default PlacesListPhotos;
