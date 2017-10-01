import styled from 'styled-components';

const Ads = styled.section`
#mobile-banner {
    background: #ff8207;
    padding-top: 32px;
    padding: 30px;
}
#mobile-banner .container {
    display: flex;
    justify-content: center;
}
#mobile-banner .image {
    margin-right: 60px;
}
#mobile-banner .text {
    margin-top: 25px;
    color: #fff;
}
#mobile-banner .text h4 {
    margin: 0;
    font-size: 3.2em;
    max-width: 370px;
    font-weight: 400;
    text-align: left;
    margin-bottom: 24px;
}
#mobile-banner .text .button {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
}
#mobile-banner .text a button {
    border-color: #fff;
    color: #fff;
}
@media screen and (max-width: 600px) {
    #mobile-banner .container {
        padding: 0;
        display: block;
    }
    #mobile-banner .component {
        width: 100%;
    }
    #mobile-banner .image {
        margin-right: 10px;
    }
    #mobile-banner .text {
        width: 300px;
        margin-top: 40px;
    }
}
`;
export default () => (
    <Ads className="row" id="ads-section">
        <div className="row" id="mobile-banner">
            <div className="container">
                <div className="component">
                    <div className="box image"><img src="https://newpoi-assets.apontador.com.br/website/images/phone_ad_white.png" /></div>
                    <div className="box text">
                        <h4>Leve o Apontador no seu smartphone, é grátis</h4>
                        <div className="row button">
                            <a href="#"><button>Baixe Agora</button></a>
                        </div>
                        <div className="row">
                            <span>* Disponível somente para Android</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Ads>
);