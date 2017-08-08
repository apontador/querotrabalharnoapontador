import styled, {css} from 'styled-components';
import {mainColor} from 'styled/app/colors.styled';
import media from 'styled/app/media.styled';

const arrowSize       = '25px';
const arrowSizeTablet = '30px';

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
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
    transform: translate 0.15s ease;
    
    .navArrow__image {
        margin-left: 2px;
    }

    &:active {
        transform: scale(1.1);
    }

    ${props => props.left && css`
        right: initial;
        left: 0;
        transform: rotate(180deg);
        
        &:active {
            transform: scale(1.1) rotate(180deg);
        }
    `}
    
    ${media.tablet`
        width: ${arrowSizeTablet};
        height: ${arrowSizeTablet}; 
        top: calc(50% - ${arrowSizeTablet} / 2);
    `};
    
`;