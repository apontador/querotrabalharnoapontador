/* eslint-disable */
import React, { Component } from 'react';
var rows;

class PlaceTags extends Component{
  render(){
    return (
      <a href="" className="tags col1">{this.props.tags}</a>
    )
  }
}

class PlacesListLocal extends Component{
  constructor(props) {
    super(props);
    this.state = {
      local: [],
      bread: [],
      subBreadcrumb: [],
      statisticsRating: [],
      statisticsReviews: [],
      statisticsCurtida: [],
      statisticsTags: [],
      location: [],
      phone1: [],
      phone2: [],
      address: []
    }
  }

  componentDidMount(){

    var self = this;
    var url = 'https://api.apontador.com.br/v2/places/B37822W2'
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
      console.log(data.place);
      self.setState({
        local: data.place,
        breadcrumb: data.place.categories[0].name,
        subBreadcrumb: data.place.categories[0].subcategory.name,
        statisticsRating:data.place.statistics.rating,
        statisticsReviews:data.place.statistics.reviews,
        statisticsCurtida:data.place.statistics.thumbsUp,
        statisticsTags:data.place.tags,
        location:data.place.location,
        phone1: data.place.phones[0],
        phone2: data.place.phones[1],
        address: data.place.address,
      });

    })
  }
  render(){
    rows = [];
    for (var i = 0; i < this.state.statisticsRating; i++) {
        rows.push(<i className="fa fa-star" aria-hidden="true"></i>);
    }
    return(
      <div>
      <div className="breadcrumb">
        <p><span className="raiz">APONTADOR</span> > {this.state.breadcrumb} > {this.state.subBreadcrumb}</p>
      </div>
      <div className="col8 bg-branco">

        <div className="info">
          <h2>{this.state.local.name}</h2>
          <div className="rating">
            { rows } Média de {this.state.statisticsRating} - Comentários: {this.state.statisticsReviews}
          </div>
          <div>
            <p className="info-texto"><i className="fa fa-phone" aria-hidden="true"></i> Telefones: {this.state.phone1} -  {this.state.phone2} </p>
          </div>
          <div>
            <p className="info-texto"><i className="fa fa-map-marker" aria-hidden="true"></i> Endereço: {this.state.address.street} - {this.state.address.city} - {this.state.address.state} - CEP: {this.state.address.zipcode}<br/><br/>
            <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> {this.state.statisticsCurtida} Pessoas Recomendaram  <span className="flr"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Curta
             <i className="fa fa-share-alt ml20" aria-hidden="true"></i> Compartilhe</span>
            </p>
          </div>
          <div>
          <iframe className="maps" src="https://maps.google.com/maps?q=-23.588295029163444,-46.65945053100586&hl=es;z=14&amp;output=embed"/>
          </div>
          <div className="linha linha-6 mt20 bg-branco">
            {this.state.statisticsTags.map(item => (
              <PlaceTags tags={item.value}/>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default PlacesListLocal;
