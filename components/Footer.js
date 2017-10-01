import styled from 'styled-components';

const Footer = styled.footer`
float: left;
width: 100%;
background-color: #424242;
color: #fff;
padding: 30px;
section#category-section {
    padding-top: 32px;
    padding-bottom: 11px;
    border-bottom: 1px solid #5f5f5f;
}
h3 {
    float: left;
    width: 100%;
    margin: 0;
    font-size: 1.8em;
    font-weight: 400;
    margin-bottom: 16px;
}
ul {
    float: left;
}
section#category-section li {
    margin-right: 8px;
    padding: 8px 0;
    margin-bottom: 16px;
}
a {
    color: #fff;
}
section#category-section li span {
    background-color: #6c6c6c;
    border-radius: 40px;
    padding: 8px;
    font-size: 1.4em;
    color: #fff;
}
section#category-section li:last-child {
    margin-right: 0;
}
section#category-section li#see-all-categories a {
    color: #ff8207;
}
section#category-section li#see-all-categories a span {
    text-transform: uppercase;
    padding: 9px 16px;
    font-weight: 600;
    background: 0;
    color: #ff8207;
}
section#about-section {
    padding-top: 32px;
}
section#about-section .flex-box {
    justify-content: center;
}
section#about-section .flex-box .box {
    max-width: 182px;
    height: auto;
    margin-right: 90px;
}
section#about-section h3 {
    margin-bottom: 24px;
}
section#about-section .flex-box ul.component li {
    width: 100%;
    margin-bottom: 5px;
    font-size: 1.4em;
}
section#about-section .flex-box #social ul.component li {
    float: left;
    width: 24px;
    height: 24px;
    margin-right: 8px;
}
section#about-section #copyright {
    text-align: center;
    font-size: 1.2em;
    margin: 46px 0 10px 0px;
}
@media screen and (max-width: 768px) {
    padding: 30px;
    section#category-section {
        border-bottom: 0;
    }
    section#category-section li:last-child {
        margin-right: 0;
        width: 100%;
        text-align: center;
        margin-bottom: 0;
        border-top: 1px solid #5f5f5f;
        margin-top: 16px;
        padding-top: 18px;
    }
    #about-section .flex-box {
        display: block;
        width: 100%;
        float: left;
    }
    #about-section #copyright {
        margin: 30px 0;
    }
    #about-section .flex-box .box#about {
        padding: 12px 0;
        border-top: 1px solid #5f5f5f;
    }
    #about-section .flex-box .box {
        float: left;
        margin: 0;
        width: 100%;
        max-width: 100%;
    }
} 
`;

export default () => (
    <Footer className="row">
        <section className="row" id="category-section">
            <div className="container">
                <h3>Categorias mais populares</h3>
                <ul className="compoment" id="category-list">
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/animais"><span>Animais</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/arte-e-cultura"><span>Arte e Cultura</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/automoveis-e-veiculos"><span>Automóveis e Veículos</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/beleza-e-estetica"><span>Beleza e Estética</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/educacao"><span>Educação</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/eletrodomesticos"><span>Eletrodomésticos</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/entretenimento-e-lazer"><span>Entretenimento e Lazer</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/hospedagem-e-turismo"><span>Hospedagem e Turismo</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/informatica"><span>Informática</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/moda-e-acessorios"><span>Moda e Acessórios</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/restaurantes"><span>Restaurantes</span></a>
                    </li>
                    <li className="box">
                        <a href="https://www.apontador.com.br/em/sao-paulo-sp/servicos-medicos-e-consultorios"><span>Serviços Médicos e Consultórios</span></a>
                    </li>
                    <li className="box" id="see-all-categories">
                        <a href="https://www.apontador.com.br/local/categorias"><span>Ver Todas</span></a>
                    </li>
                </ul>
            </div>
        </section>
        <section className="row" id="about-section">
            <div className="container">
                <div className="flex-box">
                    <div className="box" id="about">
                        <h3>Sobre</h3>
                        <ul className="component">
                            <li className="box">
                                <a href="https://www.apontador.com.br/sobre" target="_blank">O que é o Apontador?</a>
                            </li>
                            <li className="box">
                                <a href="https://www.apontador.com.br/institucional/#home" target="_blank">Insitucional</a>
                            </li>
                            <li className="box">
                                <a href="http://atendimento.apontador.com.br/hc/pt-br#answer10" rel="nofollow" target="_blank">Publicidade</a>
                            </li>
                            <li className="box">
                                <a href="https://grupolbs.recruiterbox.com/" rel="nofollow" target="_blank">Trabalhe conosco</a>
                            </li>
                            <li className="box">
                                <a href="http://atendimento.apontador.com.br/hc/pt-br" rel="nofollow" target="_blank">Sugestões</a>
                            </li>
                            <li className="box">
                                <a href="" target="_blank">Termos de uso</a>
                            </li>
                            <li className="box">
                                <a href="" target="_blank">Imprensa</a>
                            </li>
                            <li className="box">
                                <a href="http://atendimento.apontador.com.br/hc/pt-br" rel="nofollow" target="_blank">Ajuda</a>
                            </li>
                            <li className="box">
                                <a href="https://play.google.com/store/apps/details?id=com.lbslocal.android.local&amp;hl=pt_BR" rel="nofollow" target="_blank">App do Apontador</a>
                            </li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="box" id="blogs">
                            <h3>Conteúdo</h3>
                            <ul className="component">
                                <li className="box">
                                    <a href="http://dicascidade.com.br/" rel="nofollow" target="_blank">Dicas Cidade</a>
                                </li>
                                <li className="box">
                                    <a href="http://www.petcidade.com.br/" rel="nofollow" target="_blank">Pet Cidade</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box" id="social">
                        <h3>Redes sociais</h3>
                        <ul className="component">
                            <li className="box">
                                <a href="https://www.facebook.com/apontador/" rel="nofollow" target="_blank"><img alt="facebook" src="https://newpoi-assets.apontador.com.br/website/images/fb.svg" title="Facebook"/></a>
                            </li>
                            <li className="box">
                                <a href="https://twitter.com/apontador" rel="nofollow" target="_blank"><img alt="twitter" src="https://newpoi-assets.apontador.com.br/website/images/twitter.svg" title="Twitter"/></a>
                            </li>
                            <li className="box">
                                <a href="https://www.instagram.com/apontador.com.br/" rel="nofollow" target="_blank"><img alt="instagram" src="https://newpoi-assets.apontador.com.br/website/images/insta.svg" title="Instagram"/></a>
                            </li>
                            <li className="box">
                                <a href="https://www.linkedin.com/company-beta/858461/" rel="nofollow" target="_blank"><img alt="linkedin" src="https://newpoi-assets.apontador.com.br/website/images/linkedin.svg" title="Linkedin"/></a>
                            </li>
                            <li className="box">
                                <a href="https://plus.google.com/+ApontadorBr" rel="nofollow" target="_blank"><img alt="google-plus" src="https://newpoi-assets.apontador.com.br/website/images/gplus.svg" title="Google +"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="component row" id="copyright">
                    <p>© 2017 Apontador Busca Local LTDA. Todos os direitos reservados.</p>
                </div>
            </div>
        </section>
    </Footer>
)