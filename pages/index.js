import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper'
import initStore from 'utils/store';
import { setVillainLocation} from 'actions/villain';

import Layout from 'components/Layout';
class Index extends Component {

  constructor (props, context) {
    super(props, context);
  }

  getContent(){
    if(this.props.villain.info.targets){
      return (
        <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'auto'}}>

    </div>
    );
    }

    return <h2>Carregando...</h2>
  }

  render () {


    return (
      <Layout>
    <div className="container">
    {this.getContent()}

    </div>
    </Layout>
  )
  }
}

const mapStateToProps = ({ villain }) => ({
  villain
});


export default withRedux(initStore, mapStateToProps, {
  setVillainLocation
})(Index);