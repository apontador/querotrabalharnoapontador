export default () => (
  <header className="with-search">
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
        <div className="shadow-default" id="auto-complete" style={{display: 'none'}}>
          <ul className="row" id="option-list">
            <li className="row">dwqdwqdw dewf ewbfkerbf berwbf jkr ebfkjer bfkjerbfkjberkjfberkfer f em Rua Fermela, Capão Redondo, São Paulo, SP</li>
            <li className="row">dwqdwqdw dewf ewbfkerbf berwbf jkr ebfkjer bfkjerbfkjberkjfberkfer f em Rua Fergana, Vila Maria, São Paulo, SP</li>
            <li className="row">dwqdwqdw dewf ewbfkerbf berwbf jkr ebfkjer bfkjerbfkjberkjfberkfer f em Travessa Fernandes, Freguesia do Ó, São Paulo, SP</li>
            <li className="row">dwqdwqdw dewf ewbfkerbf berwbf jkr ebfkjer bfkjerbfkjberkjfberkfer f em Rua Dos Ferreiras, Cangaíba, São Paulo, SP</li>
            <li className="row">dwqdwqdw dewf ewbfkerbf berwbf jkr ebfkjer bfkjerbfkjberkjfberkfer f em Rua Edna Ferber, Brasilândia, São Paulo, SP</li>
            <li className="row">dwqdwqdw dewf ewbfkerbf berwbf jkr ebfkjer bfkjerbfkjberkjfberkfer f em Rua Ferri, Vila Prudente, São Paulo, SP</li>
          </ul>
          <div className="row def-location" id="my-location">
            <span>Minha localização atual</span>
          </div>
          <div className="row def-location" id="anywhere">
            <span>Em qualquer lugar</span>
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
  </header>
)