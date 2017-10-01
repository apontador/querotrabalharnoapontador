import React from 'react';
import { connect } from 'react-redux';
import PlaceDetail from 'components/PlaceDetail';
import { getPlace} from 'actions/place';


class MainContent extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {access_token} = this.props.auth.info;
        if(access_token){
            this.props.getPlace(this.props.auth.info.access_token);
        }

    }

    getContent(){

        if(!this.props.place.info.id){
            return(
                <h1 style={{textAlign: 'center', margin: '50px'}}>Carregando informações...</h1>
            )
        }

        return(
            <div>
                <PlaceDetail {...this.props.place.info} photos={this.props.place.photos} reviews={this.props.place.reviews}/>
            </div>
        )

    }

    render(){
        return this.getContent();
    }
}

const mapStateToProps = ({ place, auth }) => ({
    place,
    auth
});

export default connect(mapStateToProps, {getPlace})(MainContent);