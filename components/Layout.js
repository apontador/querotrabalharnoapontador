import React from 'react';
import Head from 'next/head';
import stylesheet from 'styles/global.scss';
import { getPossibleLocations} from 'actions/villain';
import { connect } from 'react-redux';
import Header from 'components/Header';


class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: '',
      longitude: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleTouchTap(){
    this.props.getPossibleLocations(this.state);
  }

  render() {

    return (
        <div>
          {<style dangerouslySetInnerHTML={{ __html: stylesheet }} />}
          <Head>
            <title>{ this.props.title || 'Home' }</title>
          </Head>
          <Header/>

          <div className='container'>

            <h1 id="welcome">Home</h1>
            {this.props.children}

          </div>

        </div>
    )
  }
}


const mapStateToProps = ({ villain }) => ({
  villain
});

export default connect(mapStateToProps, {getPossibleLocations})(Layout);