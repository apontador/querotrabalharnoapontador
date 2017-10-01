import styled from 'styled-components';
import Rating from 'components/Rating';
import Review from 'components/Review';


const Section = styled.section`
.box.big {
    padding: 0;
}
width: 576px;
float: left;
margin-right: 16px;
margin-bottom: 16px;
padding: 0 !important;
`;

const Reviews = styled.ul`

`;

export default ({reviews}) => (
    <Section className="box big" id="comments">
        <Rating/>
        <Reviews id="comments-list">
            {reviews.map(review => <Review {...review} />)}
        </Reviews>
    </Section>
);