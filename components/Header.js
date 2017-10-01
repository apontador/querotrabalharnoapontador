import styled from 'styled-components';

const Header = styled.header`
 #logo {
     float: left;
     margin-left: 16px;
     display: flex;
     align-items: center;
     height: 38px;
 }
 #menu-trigger {
     padding: 3px;
     margin: 10px 0;
     cursor: pointer;
     float: left;
 }
 .component#login {
     margin-left: 16px;
 }
 #header-search {
     width: 614px;
     margin: 0 auto;
 }
 .with-search form#search {
     width: 100%;
 }
 form#search {
     display: flex;
     justify-content: center;
     flex-direction: column;
     position: relative;
     z-index: 9999;
 }
 form#search .component {
     border: 1px solid #ff8207;
     box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);
     border-radius: 2px;
     margin: 0 auto;
     display: flex;
 }
 form#search .component .box {
     width: 336px;
 }
 form#search .component .box#location {
     width: 222px;
 }
 form#search input {
     padding: 16px 8.8px 15px;
     width: 100%;
     border-color: transparent;
     outline: 0;
     font-size: 1.4em;
     -webkit-appearance: none;
     outline: 0;
 }
 form#search .component .box#search-place {
     width: 50px;
 }
 form#search button {
     border-color: transparent;
     width: 100%;
     background: #ff8207 url(https://newpoi-assets.apontador.com.br/website/images/buscar.svg) no-repeat;
     background-position: center left 15px;
     font-size: 1.6em;
     text-transform: none;
     color: #fff;
     padding: 15px 5px 15px 25px;
     height: 100%;
 }
 form#search button {
     text-indent: -9999px;
 }
 button {
     color: #9012fe;
     border-color: #9012fe;
 }
 #login button {
     margin-right: 0;
     border: 1px solid transparent;
     color: #ff8207;
     background-color: #eee;
 }
 @media screen and (max-width: 500px) {
     form#search button {
         background: #ff8207 url(https://newpoi-assets.apontador.com.br/website/images/buscar.svg) no-repeat;
         background-position: center;
         background-size: 20px;
     }
 }
 @media screen and (max-width: 530px) {
     .component#login button {
         border: 0;
         padding: 0;
         background: url(https://newpoi-assets.apontador.com.br/website/images/entrar_mobile.svg) no-repeat;
         text-indent: -9999px;
         width: 20px;
         height: 20px;
     }
     .component#login {
         margin: 10px 0;
     }
 }
 @media screen and (max-width: 600px) {
     form#search .component .box#query {
         width: 80%;
     }
 }
 @media screen and (max-width: 716px) {
     form#search {
         display: block;
     }
     form#search .component {
         width: 100%;
         background: #fff;
         display: flex;
         justify-content: space-between;
     }
     form#search .component .box#query {
         width: 90%;
     }
     form#search .component .box#location {
         display: none;
     }
     form#search .component .box#search-place {
         float: right;
     }
     form#search button {
         text-indent: -9999px;
         padding: 0;
         height: 51px;
     }
 }
 @media screen and (max-width: 1150px) {
     .component#anuncie {
         display: none;
     }
 }
 @media screen and (max-width: 960px) {
     display: flex;
     flex-direction: row;
     flex-wrap: wrap;
     #logo {
         margin: 0 auto;
     }
     .box.right {
         position: absolute;
         right: 16px;
         top: 16px;
     }
     .box.left {
         order: 1;
         flex-grow: 2;
         margin-right: 0;
         justify-content: center;
         display: flex;
     }
     #header-search {
         order: 4;
         width: 100%;
         flex-grow: 2;
         margin-top: 20px;
     }
     #menu-trigger {
         position: absolute;
         left: 16px;
         top: 16px;
     }
 }
`;


export default () => (
  <Header className="with-search">
    <div className="box left">
      <div id="menu-trigger"><img alt="Menu" src="https://newpoi-assets.apontador.com.br/website/images/menu.svg" title="Menu"/></div>
      <div id="logo">
        <a href="https://www.apontador.com.br/"><img src="https://newpoi-assets.apontador.com.br/website/images/logo_small.svg"/></a>
      </div>
    </div>
    <div id="header-search">
      <form action="https://www.apontador.com.br/local/search.html" className="row" id="search" name="search">
        <div className="component">
          <div className="box" id="query">
            <input autocomplete="off" id="query_field" name="q" placeholder="O que você procura?" type="text" value="" />
          </div>
          <div className="box" id="location">
            <input autocomplete="off" id="location_field" name="loc" placeholder="Cidade, Estado" type="text" value="" />
          </div>
          <div className="box" id="search-place">
            <button type="submit">Buscar</button>
          </div>
        </div>
      </form>
    </div>
    <div className="box right">
      <div className="component" id="anuncie">
        <a href="https://www.apontador.com.br/mais/planos/" target="_blank"><button id="anuncie">Anuncie seu Negócio</button></a>
      </div>
      <div className="component" id="login">
        <button id="login-trigger">Entrar</button>
      </div>
    </div>
  </Header>
)