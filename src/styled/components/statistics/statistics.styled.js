import styled from 'styled-components';

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

export const Container = styled.span`
    color: white;
    padding: 2px 8px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 300;
    background-color: ${props => getRateColor(props.rate)};
`;