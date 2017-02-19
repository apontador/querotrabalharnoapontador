/* eslint-disable */
import React, { Component } from 'react';

class PlaceRecomendado extends Component{
  render(){
    return (
    <div className="item-recomendado">
      <div className="vertical">
        <img src='../images/placeholder.png' className="prd5"/>
      </div>
      <div className="vertical">
        <p className="titulo-recomendado">{this.props.texto}</p>
        <p className="cidade-recomendado">{this.props.cidade}</p>
      </div>
    </div>
    )
  }

}
class PlacesListRecomendado extends Component{
  constructor(props) {
    super(props);
    this.state = {
      recomendadosList: []
    }
  }

  componentDidMount(){

    var self = this;
    var url = 'https://api.apontador.com.br/v2/addresses?q=parques'
    var options = {
      method: 'GET',
      headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer 97b684b0-39ce-46e9-ab27-51ba2ba53209'
      }
    }

    fetch(url, options)
    .then(function(response) {
      return response.json();
    })
    .then(function(data){
      //console.log(data);
      self.setState({
        recomendadosList: data.addressResults.addresses
      });

    })
  }
  render(){
    return(
      <div>
      <div className="col4 pld50 bg-branco">
        <div className="centralizado mb20">
          <img src='../images/ads-lateral.png' className="ads prd5"/>
        </div>
        <h3 className="texto-centro">RECOMENDADO PARA VOCÊ</h3>
        {this.state.recomendadosList.map(item => (
          <PlaceRecomendado texto={item.description} cidade={item.city}/>
        ))}
      </div>
      </div>
    )
  }
}

export default PlacesListRecomendado;
