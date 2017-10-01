import styled from 'styled-components';
import {getRating} from 'utils/rating';
import Reviews from 'components/Reviews';


const Place = styled.div`
   #place-main-content {
       width: 100%;
       float: left;
       margin-top: 32px;
   }
   #place-main-content .container {
       overflow: auto;
   }
   .container {
       max-width: 960px;
       margin: 0 auto;
       padding: 0 16px;
       position: relative;
   }
   #place-main-content .box.big {
       width: 576px;
       float: left;
       margin-right: 16px;
       margin-bottom: 16px;
   }
   #place-main-content .box {
       padding: 16px;
       display: inline-block;
   }
   #place-main-content #complementary-info {
       display: flex;
       justify-content: space-between;
   }
   #place-main-content section#vcard #address {
       background-image: url(https://newpoi-assets.apontador.com.br/website/images/endereco.svg);
       background-repeat: no-repeat;
       background-position: center left;
       background-size: 14px;
       padding-left: 30px;
       line-height: 18px;
       margin-bottom: 16px;
   }
   #place-main-content h1 {
       font-size: 2.6em;
       font-weight: bold;
       color: #424242;
       margin: 0;
   }
   #place-main-content .box.left {
       padding-left: 0;
       max-width: 370px;
       padding-right: 0;
   }
   #place-main-content .box {
       padding: 16px;
       display: inline-block;
   }
   #place-main-content .avaliation span {
       line-height: 20px;
   }
   #place-main-content span {
       font-size: 1.4em;
       color: rgba(0, 0, 0, 0.54);
   }
   #place-main-content .box.right {
       padding-right: 0;
   }
   #place-main-content .box {
       padding: 16px;
       display: inline-block;
   }
   #place-main-content section#vcard #address {
       background-image: url(https://newpoi-assets.apontador.com.br/website/images/endereco.svg);
       background-repeat: no-repeat;
       background-position: center left;
       background-size: 14px;
       padding-left: 30px;
       line-height: 18px;
       margin-bottom: 16px;
   }
   #place-main-content span a {
       color: rgba(0, 0, 0, 0.54);
   }
   #place-main-content section#vcard #buttons {
       justify-content: space-between;
       margin-bottom: 16px;
   }
   #place-main-content #see-phone button {
       background-image: url(https://newpoi-assets.apontador.com.br/website/images/ver_telefone.svg);
       background-repeat: no-repeat;
       width: 169px;
       background-position: center left 18px;
       text-indent: 25px;
   }
   #place-main-content button {
       background-color: #ff8207;
       color: #fff;
       border-color: #ff8207;
   }
   #place-main-content #see-phone #call-mobile {
       display: none;
   }
   #place-main-content #share button {
       background-image: url(https://newpoi-assets.apontador.com.br/website/images/compartilhar.svg);
       background-repeat: no-repeat;
       width: 169px;
       background-position: center left 18px;
       text-indent: 25px;
       background-color: #fff;
       color: #ff8207;
   }
   #place-main-content section#vcard #social-buttons,
   #place-main-content section#vcard #phones {
       border: solid 1px rgba(0, 0, 0, 0.12);
       padding: 10px 0;
       margin-bottom: 16px;
       display: none;
   }
   #place-main-content section#vcard #social-buttons,
   #place-main-content section#vcard #phones {
       border: solid 1px rgba(0, 0, 0, 0.12);
       padding: 10px 0;
       margin-bottom: 16px;
       display: none;
   }
   #place-main-content section#vcard #map {
       margin-bottom: 16px;
   }
   #place-main-content section#vcard #map h2 {
       margin-bottom: 16px;
       background: url(https://newpoi-assets.apontador.com.br/website/images/mapa.svg) no-repeat;
       padding-left: 31px;
       background-position: center left;
   }
   #place-main-content h2 {
       font-size: 1.8em;
       font-weight: 400;
       color: rgba(0, 0, 0, 0.87);
   }
   #place-main-content section#vcard #map #view-map {
       justify-content: center;
   }
   #place-main-content #more-places {
       justify-content: center;
   }
   #place-main-content #more-places button,
   #place-main-content #more-photos button {
       background: #fff;
       color: #ff8207;
       width: 300px;
   }
   #place-main-content section#vcard #photos {
       border-top: 1px solid rgba(0, 0, 0, 0.12);
       padding-top: 16px;
       margin: 16px 0;
   }
   #place-main-content section#vcard #photos h2 {
       margin-bottom: 16px;
       background: url(https://newpoi-assets.apontador.com.br/website/images/fotos.svg) no-repeat;
       padding-left: 31px;
       background-position: center left;
   }
   #place-main-content section#vcard #photos ul {
       display: flex;
       flex-wrap: wrap;
       justify-content: center;
       align-items: center;
   }
   #place-main-content section#vcard #photos ul li {
       float: left;
       width: 118px;
       height: 118px;
       overflow: hidden;
       margin-right: 10.6px;
       margin-bottom: 10px;
   }
   #place-main-content section#vcard #photos ul li img {
       height: 100%;
       width: 100%;
   }
   #place-main-content .box.small {
       width: 336px;
       float: none;
       margin-bottom: 16px;
   }
   #place-main-content .box {
       padding: 16px;
       display: inline-block;
   }
   #place-main-content #open-close-time .main-info {
       display: flex;
       align-items: center;
       justify-content: space-between;
       margin-bottom: 12px;
   }
   #place-main-content #open-close-time h2 {
       background: url(https://newpoi-assets.apontador.com.br/website/images/horario_funcionamento.svg) no-repeat;
       padding-left: 30px;
       background-position: center left;
       float: left;
   }
   #place-main-content #open-close-time .status {
       float: right;
       font-size: 1.4em;
       text-transform: uppercase;
       font-weight: bold;
       color: #20b226;
   }
   #place-main-content #open-close-time #open-time {
       float: left;
       margin-left: 30px;
   }
   #place-main-content #about {
       margin-bottom: 16px;
   }
   #place-main-content #about h2 {
       background: url(https://newpoi-assets.apontador.com.br/website/images/sobre.svg) no-repeat;
       padding-left: 30px;
       background-position: center left;
       float: left;
       width: 100%;
       margin-bottom: 12px;
   }
   #place-main-content #about p {
       margin: 0;
       font-size: 1.4em;
       color: rgba(0, 0, 0, 0.54);
       float: left;
       line-height: 1.43;
   }
   #place-main-content span.see-more {
       font-size: .9em;
       color: #fd7f00;
       float: left;
       width: 100%;
       margin-top: 5px;
       font-weight: 500;
       cursor: pointer;
       text-transform: lowercase;
   }
   #place-main-content #other-info {
       border-top: solid 1px rgba(0, 0, 0, 0.12);
       padding-top: 16px;
   }
   #place-main-content #other-info h2 {
       background: url(https://newpoi-assets.apontador.com.br/website/images/outras_informacoes.svg) no-repeat;
       padding-left: 30px;
       background-position: center left;
       float: left;
       width: 100%;
       margin-bottom: 12px;
   }
   #place-main-content #other-info .row {
       margin-bottom: 16px;
   }
   #place-main-content #other-info #links {
       margin-bottom: 0;
   }
   #place-main-content #other-info h3 {
       font-size: 1.4em;
       color: rgba(0, 0, 0, 0.54);
       margin-bottom: 5px;
   }
   #place-main-content #other-info #links ul li.site {
       background: url(https://newpoi-assets.apontador.com.br/website/images/site.svg) no-repeat;
       background-position: center left;
       padding-left: 35px;
       overflow: hidden;
   }
   #place-main-content #other-info #links ul li:last-child {
       margin-bottom: 0;
   }
   #place-main-content #other-info #links ul li {
       font-size: 1.4em;
       float: left;
       width: 100%;
       color: rgba(0, 0, 0, 0.54);
       margin-bottom: 10px;
   }
   #place-main-content #other-info #links ul li a {
       color: #ff8207;
       text-decoration: underline;
   }
   #place-main-content #more-places button:hover,
   #place-main-content #more-photos button:hover {
       background: #ff8207;
       color: #fff;
   }
   #place-main-content .box.big {
       width: 576px;
       float: left;
       margin-right: 16px;
       margin-bottom: 16px;
   }
   #place-main-content #related-places h2 {
       margin-bottom: 5px;
   }
   #place-main-content #related-places ul#places-list {
       margin-bottom: 16px;
   }
   #place-main-content #related-places ul li.place {
       border-bottom: solid 1px rgba(0, 0, 0, 0.12);
       padding: 8px 0;
   }
   #place-main-content #related-places .box {
       padding-top: 8px;
       padding-bottom: 8px;
   }
   #place-main-content .box.left {
       padding-left: 0;
       max-width: 370px;
       padding-right: 0;
   }
   #place-main-content h4 {
       font-size: 1.4em;
       font-weight: 400;
       color: rgba(0, 0, 0, 0.87);
   }
   #place-main-content h4 a {
       color: rgba(0, 0, 0, 0.87);
   }
   #place-main-content .box.big {
       width: 576px;
       float: left;
       margin-right: 16px;
       margin-bottom: 16px;
   }
   @media screen and (max-width: 570px) {
       #see-phone,
       #see-route {
           width: 48%;
           min-width: initial;
       }
       #buttons button {
           width: 100%;
       }
       #buttons #share {
           display: none;
       }
   }
   @media screen and (max-width: 630px) {
       .container {
           padding: 0;
       }
       .box.big,
       .box.small {
           width: 100% !important;
           box-shadow: none;
       }
   }
   @media screen and (max-width: 960px) {
       #place-main-content {
           margin-top: 16px;
       }
       #place-main-content .box.big,
       #place-main-content .box.small {
           margin-right: 0;
           margin: 0 auto;
           float: none;
           margin-bottom: 16px;
           display: block;
           width: 576px;
           overflow: hidden;
       }
   }
`;

export default ({address, categories, id, link, openingHours, location, name, phones, statistics, tags, urlApontador, photos, reviews}) => (
    <Place>
        <section className="row" id="place-main-content">
            <div className="container">
    <section className="box big shadow-default" id="vcard">
        <div className="row" id="title">
            <h1 itemprop="name">{name}</h1>
        </div>
        <div className="row" id="complementary-info">
            <div className="avaliation box left" id="place-avaliation" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
                <meta content="4.9" itemprop="ratingValue" />
                <meta content="295" itemprop="reviewCount" />
                <ul className="stars">
                    {getRating(statistics.rating)}
                </ul>
                <span className="number-avaliations">({statistics.reviews} avaliações)</span>
            </div>
        </div>
        <div className="row" id="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
            <meta content={`${address.street}, ${address.number}`} itemprop="streetAddress" />
            <meta content="São Paulo" itemprop="addressLocality" />
            <meta content="SP" itemprop="addressRegion" />
            <meta content="BR" itemprop="addressCountry" /><span>
            <a href="https://www.apontador.com.br/guia_de_ruas/sp/sao_paulo/avenida_pedro_alvares_cabral.html" rel="no-follow" >
           {`${address.street}`}</a>, {`${address.number}`}, {`${address.district}`}, <a href="https://www.apontador.com.br/em/sao_paulo-sp">{`${address.city}`}</a> - {`${address.state}`}, <a href="https://www.apontador.com.br/cep/04094050">CEP: {`${address.zipcode}`}</a></span>
        </div>
        <div className="flex-box row" id="buttons">
            <div className="has-phone" id="see-phone">
                <button className="multiple-phones">Ver Telefone</button> <a href={`tel:${phones[0]}`} id="call-mobile"><button>Ligar</button></a>
            </div>
            <div id="see-route">
                <a href= {`https://www.google.com.br/maps/place/${encodeURI(`${address.street}, ${address.number}`)}`} target="_blank"><button>Como Chegar</button></a>
            </div>
            <div id="share">
                <button>Compartilhar</button>
            </div>
        </div>
        <div className="row" id="social-buttons">
            <h5>Compartilhar:</h5>
        </div>
        <div className="row" id="map" itemprop="geo" itemscope itemtype="http://schema.org/GeoCoordinates">
            <meta content={`${location.lat}`} itemprop="latitude" />
            <meta content={`${location.lng}`} itemprop="longitude" />
            <div className="row">
                <h2>Mapa</h2>
            </div>
            <div className="flex-box row" id="view-map">
                <a href={`https://www.google.com.br/maps/place/${encodeURI(`${address.street}, ${address.number}`)}`} target="_blank"><img src={`https://widget.maplink.com.br/WidGetGenerator/?v=4.1&lat=${location.lat}&lng=${location.lng}&w=544&h=140&m=400&image=https://newpoi-assets.apontador.com.br/website/images/maplink_pin.png&count=0$`} /></a>
            </div>
        </div>
        <div className="flex-box row" id="more-places">
            <a href={`https://www.apontador.com.br/guia_de_ruas/sp/sao_paulo/${address.street.toLowerCase().replace(/\s/g, "_").replace(/[í]/g,"i")}.html"`}><button>Ver outros locais nesta rua</button></a>
        </div>
        <div className="row" id="photos">
            <meta content="https://imagesapt.apontador-assets.com/fit-in/320x240/3bdd20e73ac14386b44a2d8b22185048/c40888340e201s2013-2480492315594714.jpg" itemprop="image" />
            <h2>Fotos</h2>
            <ul className="row">
                {photos.map(photo => (
                    <li>
                        <a href="#"><img src={photo.small}/></a>
                    </li>
                ))}
            </ul>
        </div>
    </section>
        <div className="box small shadow-default">
            <div className="row" id="open-close-time">
                <div className="main-info row">
                    <h2>Horário de atendimento</h2><span className="status open">{openingHours.openNow ? 'Aberto': 'Fechado'}</span>
                </div>
                <div id="open-time">
                    {getOpeningHours(openingHours.periods)}
                </div>
            </div>
        </div>
        <div className="box small shadow-default">
            <div className="row" id="about">
                <h2>Sobre</h2>
                <p data-label="Ler tudo" data-limit="220" itemprop="description">O Parque Ibirapuera é o parque urbano mais importante da cidade de São Paulo e foi inaugurado dia 21 de agosto de 1954. No parque a população conta com ciclovia, treze quadras iluminadas,pistas destinadas a cooper, passe... <span className="see-more" title="Ler tudo">Ler tudo&nbsp;<small>▼</small></span></p>
            </div>
            <div className="row" id="other-info">
                <h2>Outras informações</h2>
                <div className="row">
                    <span>Nenhuma informação disponível ainda.</span>
                </div>
                <div className="row" id="links">
                    <h3>Links</h3>
                    <ul className="row">
                        <li className="site">
                            <a href="https://www.apontador.com.br/local/redirect/?url=aHR0cDovL3d3dy5wYXJxdWVkb2liaXJhcHVlcmEuY29t" rel="nofollow" target="_blank">http://www.parquedoibirapuera.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="box big shadow-default">
            <div className="row" id="related-places">
                <h2>Locais similares</h2>
                <ul className="row" id="places-list">
                    <li className="place row">
                        <div className="row">
                            <div className="box left">
                                <h4><a href="https://www.apontador.com.br/local/sp/sao_paulo/parques/2R42MFW5/defensor_seguranca_parque_da_mooca.html">Defensor Segurança - Parque da Mooca</a></h4>
                            </div>
                            <div className="box right">
                                <div className="distancy"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avaliation box left">
                                <ul className="stars">
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                </ul><span className="number-avaliations">(0 avaliações)</span>
                            </div>
                            <div className="box right">
                                <div className="partner-place">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="place row">
                        <div className="row">
                            <div className="box left">
                                <h4><a href="https://www.apontador.com.br/local/sp/sao_paulo/parques/2E5K4T92/otica_da_praca.html">Otica da Praca</a></h4>
                            </div>
                            <div className="box right">
                                <div className="distancy"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avaliation box left">
                                <ul className="stars">
                                    <li className="star filled"></li>
                                    <li className="star filled"></li>
                                    <li className="star filled"></li>
                                    <li className="star filled"></li>
                                    <li className="star filled"></li>
                                </ul><span className="number-avaliations">(1 avaliações)</span>
                            </div>
                            <div className="box right">
                                <div className="partner-place">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="place row">
                        <div className="row">
                            <div className="box left">
                                <h4><a href="https://www.apontador.com.br/local/sp/sao_paulo/parques/2FU289CK/fundacao_padre_anchieta_centro_paulista_radio_e_tv_educativa_parque.html">Fundação Padre Anchieta Centro Paulista Rádio e Tv Educativa - Parque</a></h4>
                            </div>
                            <div className="box right">
                                <div className="distancy"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avaliation box left">
                                <ul className="stars">
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                </ul><span className="number-avaliations">(0 avaliações)</span>
                            </div>
                            <div className="box right">
                                <div className="partner-place">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="place row">
                        <div className="row">
                            <div className="box left">
                                <h4><a href="https://www.apontador.com.br/local/sp/sao_paulo/parques/29F83RSY/accor.html">Accor</a></h4>
                            </div>
                            <div className="box right">
                                <div className="distancy"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avaliation box left">
                                <ul className="stars">
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                </ul><span className="number-avaliations">(0 avaliações)</span>
                            </div>
                            <div className="box right">
                                <div className="partner-place">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="place row">
                        <div className="row">
                            <div className="box left">
                                <h4><a href="https://www.apontador.com.br/local/sp/sao_paulo/parques/2D3LY52A/bra_shh002.html">Bra Shh002</a></h4>
                            </div>
                            <div className="box right">
                                <div className="distancy"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avaliation box left">
                                <ul className="stars">
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                </ul><span className="number-avaliations">(0 avaliações)</span>
                            </div>
                            <div className="box right">
                                <div className="partner-place">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="place row">
                        <div className="row">
                            <div className="box left">
                                <h4><a href="https://www.apontador.com.br/local/sp/sao_paulo/parques/2KNZ4FJ6/anhembi_turismo_e_eventos_da_cidade_de_sao_paulo_s_a_ibirapuera.html">Anhembi Turismo e Eventos da Cidade de São Paulo S/A - Ibirapuera</a></h4>
                            </div>
                            <div className="box right">
                                <div className="distancy"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="avaliation box left">
                                <ul className="stars">
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                    <li className="star fill"></li>
                                </ul><span className="number-avaliations">(0 avaliações)</span>
                            </div>
                            <div className="box right">
                                <div className="partner-place">
                                    <h5></h5>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="row flex-box" id="more-places">
                    <a href="https://www.apontador.com.br/em/parque_ibirapuera-sao_paulo-sp/entretenimento-e-lazer"><button>Ver mais locais semelhantes</button></a>
                </div>
            </div>
            </div>
                <Reviews reviews={reviews}/>
            </div>

        </section>

    </Place>

);



function getOpeningHours(openingHours){
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    return openingHours.map((opening, index) => <span className="row"><strong>{daysOfWeek[opening.open.day - 1]}:</strong> {`${opening.open.time.insert(2, ":")} às ${opening.close.time.insert(2, ":")}`}</span>)

}

String.prototype.insert = function (index, string) {
    if (index > 0)
        return this.substring(0, index) + string + this.substring(index, this.length);
    else
        return string + this;
};