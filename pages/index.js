import React, {Component} from 'react';
import withRedux from 'next-redux-wrapper'
import initStore from 'utils/store';
import { authenticate} from 'actions/auth';
import MainContent from 'components/MainContent';
import Layout from 'components/Layout';
import Breadcrumb from 'components/Breadcrumb';
class Index extends Component {

  constructor (props, context) {
    super(props, context);
  }

  getContent(){
      const {info} = this.props.place;
      return (
        <div>
            <Breadcrumb place={info.name ? {name: info.name, link: info.urlApontador} : {}} content={info.breadcrumb || []}/>
            <MainContent/>
        </div>
    );
  }

  render () {
      return (
      <Layout>
        {this.getContent()}
      </Layout>
    )
  }
}

const mapStateToProps = ({ auth, place }) => ({
  auth,
    place
});


export default withRedux(initStore, mapStateToProps, {
    authenticate
})(Index);