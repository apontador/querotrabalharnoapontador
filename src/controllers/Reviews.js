/* */
import React, { Component } from 'react';

class PlaceReview extends Component{
  render(){
    return (
    <div className='item-review'>
      <div className="col1">
        <img src={this.props.foto} alt=""/>
      </div>
      <div className="col11 pld30">
        <p className="autor-review">{this.props.autor}</p>
        <div className="rating">
          Avaliaçõe - {this.props.rating}
        </div>
        <p className="texto-review">{this.props.texto}</p>

        <p className="like-info">{this.props.likes} pessoas curtiram esta avaliação - <i className="fa fa-thumbs-o-up" aria-hidden="true"></i> Curtir </p>
      </div>
    </div>
    )
  }

}
class PlacesListReview extends Component{
  constructor(props) {
    super(props);
    this.state = {
      reviewList: [],
      lugarReview: []
    }
  }

  componentDidMount(){

    var self = this;
    var url = 'https://api.apontador.com.br/v2/places/B37822W2/reviews'
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
      self.setState({
        reviewList: data.reviewResults.reviews,
        lugarReview: data.reviewResults.reviews[0].place.name
      });

    })
  }
  render(){
    return(
      <div>
        <div className="col8">
          <h2><i className="fa fa-users" aria-hidden="true"></i> O QUE ESTÃO FALANDO SOBRE {this.state.lugarReview}</h2>
          <div className="linha">
            {this.state.reviewList.map(item => (
              <PlaceReview texto={item.text} autor={item.creation.author.name}  foto={item.creation.author.photo} rating={item.statistics.rating} likes={item.statistics.thumbsUp}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default PlacesListReview;
