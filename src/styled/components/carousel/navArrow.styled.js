import styled, {css} from 'styled-components';
import {mainColor} from 'styled/app/colors.styled';

const arrowSize = '25px';

export const Container = styled.div`
    position: absolute;
    top: calc(50% - ${arrowSize} / 2);
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${arrowSize};
    height: ${arrowSize};
    margin: 0 5px;
    border-radius: 50%;
    background-color: ${mainColor};
    z-index: 5;
    cursor: pointer;
    
    .navArrow__image {
        margin-left: 2px;
    }

    ${props => props.left && css`
        right: initial;
        left: 0;
        transform: rotate(180deg);
    `}
`;