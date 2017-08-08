import styled from 'styled-components';
import {grayLight} from 'styled/app/colors.styled';
import media from 'styled/app/media.styled';

export const H1 = styled.h1`
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 22px;
    font-weight: 400;
    
    ${media.tablet`
        font-size: 28px;
    `}
`;

export const P = styled.p`
    margin: 0 0 4px 0;
    color: ${grayLight};
    
    ${media.tablet`
        font-size: 16px;
    `}
`;

export const Small = styled.small`
    display: block;
    margin-bottom: 0;
    padding: 6px 0;
    font-size: 14px;
    color: ${grayLight};
    
    ${media.tablet`
        font-size: 15px;
    `}
`;