import styled from 'styled-components';
import {Row} from 'styled/app/styles.styled';

export const Container = Row.extend``;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    flex-basis: 100%;
    
    p {
        margin-bottom: 0;
        padding: 6px 0;
        font-size: 14px;
    }
`;

const Icon = styled.i`
    flex-shrink: 0;
    display: block;
    width: 20px;
    height: 15px;
    margin-right: 5px;
    background: url(assets/images/icons-general.png) no-repeat;
`;

export const IconFone = Icon.extend`
    background-position: 3px -769px;
`;

export const IconAddress = Icon.extend`
    background-position: 3px -817px;
`;

export const IconHours = Icon.extend`
    background: url(assets/images/clock.png) no-repeat;
    background-position: center;
`;