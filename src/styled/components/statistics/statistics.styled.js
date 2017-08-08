import styled from 'styled-components';
import {grayLight, borderLight} from 'styled/app/colors.styled';

const rates = {
    5: '#00B551',
    4: '#8dbd70',
    3: '#ecde78',
    2: '#edbf6f',
    1: '#e2403b'
};

const getRateColor = (rate) => {
    return rates[Math.round(rate)];
};

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px; 
    border-top: 1px solid ${borderLight};
    padding-top: 8px;
`;

export const Rating = styled.div`
    display: flex;
`;

export const Rate = styled.span`
    display: block;
    color: white;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    background-color: ${props => getRateColor(props.rate)};
`;

export const Reviews = styled.span`
    display: block;
    font-size: 12px;
    margin: 0 15px 0 10px;
    color: ${grayLight};
    
    .statistics__totalreviews {
        font-weight: 400;
        display: block;
    }
    
    .statistics__reviewtext {
        display: block;
    }
`;

export const Voting = styled.div`
    display: flex;
`;

export const Votes = styled.span`
    display: block;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background: url(assets/images/thumb-${props => props.vote}.svg) no-repeat;
    transition: transform 0.1s ease-in-out;
    
    &:not(:last-child) {
        margin-right: 15px;
    }
    
    &:hover {
        transform: scale(1.2);
    }
`;