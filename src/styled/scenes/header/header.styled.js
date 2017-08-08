import styled from 'styled-components';
import {Row} from 'styled/app/styles.styled';

const headerColor = '#ff8207';

export const Container = styled.header`
    height: 52px;
    background-color: ${headerColor}
`;

export const Content = Row.extend`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const Logo = styled.a`
    display: block;
    width: 156px;
    height: 43px;
    background-image: url(assets/images/logo.png);    
`;