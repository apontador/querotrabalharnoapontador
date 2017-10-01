import styled from 'styled-components';

const Rating = styled.div`
.box.big {
    padding: 0;
}
h2 {
    margin: 0 0 16px 16px;
}
#form-write-review h2 {
    background: url(https://newpoi-assets.apontador.com.br/website/images/avaliar.svg) no-repeat;
    margin: 0;
    font-weight: bold;
    background-position: center left;
    padding-left: 36px;
}
#write-text-comment {
    margin-bottom: 24px;
}
ul#rating-star-place {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 22px;
}
ul#rating-star-place li {
    background: url(https://newpoi-assets.apontador.com.br/website/images/estrela_desativada.svg) no-repeat;
    background-size: contain;
    width: 30px;
    height: 28px;
    margin-right: 17px;
    cursor: pointer;
}
#write-text-comment textarea {
    float: left;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #9a9a9a;
    color: #424242;
    font-size: 1.4em;
    padding: 15px 0 0;
}
form.review-form #submit-comment {
    float: right;
}
form.review-form #submit-comment button {
    float: right;
}
`;


export default () => (
    <Rating>
        <h2>Avaliações</h2>
        <div className="box big shadow-default" id="form-write-review">
            <div className="row">
                <h2>Avalie esse local</h2>
            </div>
            <ul className="row" id="rating-star-place">
                <li className="" data-rating-value="1" title="Muito Ruim"></li>
                <li className="" data-rating-value="2" title="Ruim"></li>
                <li className="" data-rating-value="3" title="Mais ou menos"></li>
                <li className="" data-rating-value="4" title="Bom"></li>
                <li className="" data-rating-value="5" title="Sensacional"></li>
            </ul>
            <form className="review-form">
                <div className="row">
                    <input className="review_rating rate-container is-hidden" name="rating" required="required" type="hidden" />
                </div>
                <div className="row" id="write-text-comment">
                    <textarea className="review_text" name="text" placeholder="Escreva sua avaliação" required="required"></textarea>
                </div>
                <div className="row" id="submit-comment">
                    <button type="submit">Enviar Avaliação</button>
                </div>
            </form>
        </div>
    </Rating>
)