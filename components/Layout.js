import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import stylesheet from 'styles/global.scss';
import { authenticate} from 'actions/auth';
import { connect } from 'react-redux';
import Header from 'components/Header';
import AdsSection from 'components/AdsSection';
import Footer from 'components/Footer';

const Main = styled.main`
  @media screen and (max-width: 960px) {
    margin-top: 145px;
  }
`;
class Layout extends React.Component {

  constructor(props) {
    super(props);

    this.props.authenticate();
  }

  getContent(){
      const {authenticating, fail, info, error} = this.props.auth;

      if(authenticating){
          return <h1 style={{textAlign: 'center', margin: '50px'}}>Autenticando...</h1>
      }

      if(fail){
          return <h1 style={{textAlign: 'center', margin: '50px'}}>Erro ao autenticar a aplicação. Contate o administrador do sistema</h1>
      }

      return this.props.children;
  }

  render() {
      return (
        <div>
          {<style dangerouslySetInnerHTML={{ __html: stylesheet }} />}
          <Head>
            <title>{ this.props.place.info.name || 'Apontador' }</title>
          </Head>
          <Header/>
            <Main id="place">
            {this.getContent()}
            </Main>
            <AdsSection/>
          <Footer/>

        </div>
    )
  }
}


const mapStateToProps = ({ auth, place }) => ({
  auth,
    place
});

export default connect(mapStateToProps, {authenticate})(Layout);