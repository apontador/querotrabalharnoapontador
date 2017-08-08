import styled from 'styled-components';
import {mainColor, borderLight} from 'styled/app/colors.styled';

export const Container = styled.nav``;

export const List = styled.ul`
    display: flex;
    margin-bottom: 15px;
    border-bottom: 1px solid ${borderLight};
`;

export const Tab = styled.li`
    a {
        display: block;
        padding-bottom: 6px;
        border-bottom: 3px solid ${props => props.active ? mainColor : 'transparent'};
        cursor: pointer;
        transition: opacity 0.1s ease-in-out;
    }
    
    a:hover {
        opacity: 0.8;
    }
    
    &:not(:last-child) {
        margin-right: 15px;
    }
`;