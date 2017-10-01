import styled from 'styled-components';
import {getRating} from 'utils/rating';


const Review = styled.li`
.box.big {
    padding: 0;
}
h2 {
    margin: 0 0 16px 16px;
}
.about {
    margin-bottom: 23px;
}
.box {
    padding: 0;
}
.about .user-photo {
    width: 50.6px;
    height: 50px;
    overflow: hidden;
    border-radius: 30px;
    margin-right: 23px;
}
.about .user-photo img {
    width: 100%;
}
.about h4 {
    font-size: 2em;
    color: #424242;
    font-weight: bold;
    margin: 3px 0;
}
.text span {
    color: #424242;
    font-size: 1.4em;
    font-weight: normal;
    line-height: 1.43;
    word-break: break-all;
}
.comment-interation {
    margin-top: 16px;
    margin-left: 7px;
}
.comment-interation li {
    font-size: 1.2em;
    color: #424242;
    font-weight: bold;
}
.comment-interation li button {
    background: url(https://newpoi-assets.apontador.com.br/website/images/gostei_desativado.svg) no-repeat;
    border: 0;
    color: #424242 !important;
    text-transform: none;
    padding: 0;
    padding-top: 22px;
    background-position: center top;
    font-size: 1em;
    background-color: white !important;
}  

`;


export default ({text, statistics, creation}) => (
    <Review className="box big shadow-default">
        <div className="about row">
            <div className="box left">
                <div className="user-photo"><img src={creation.author.photo}/></div>
            </div>
            <div className="box left">
                <h4>{creation.author.name}</h4>
                <ul className="stars">
                    {getRating(statistics.rating)}
                </ul>
            </div>
        </div>
        <div className="text row">
            <span data-label="Ler tudo" data-limit="300">
                {text}
            </span>
        </div>
        <div className="row">
            <ul className="comment-interation row">
                <li><button className="like" data-review-id="1260412">Gostei</button></li>
            </ul>
        </div>
    </Review>
);