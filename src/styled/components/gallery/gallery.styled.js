import styled, {css} from 'styled-components';
import media from 'styled/app/media.styled';

const imageSize       = '100px';
const imageSizeTablet = '150px';

export const Container = styled.div`
    position: relative;
    margin-bottom: 15px;
    margin: -2.5px;

    ${props => props.carousel && css`
        margin: 0 0 15px 0;
        overflow-x: hidden;
        
        .gallery__list {
            flex-wrap: initial;
            height: ${imageSize}; // Altura fixa para evitar que o conteúdo abaixo pule/pisque
            transition: transform .3s ease-out;
            
            ${media.tablet`
                height: ${imageSizeTablet}
            `}
        }
        
        .gallery__item {
            flex-basis: initial;
            
            &:not(:last-child) {
                margin-right: 5px;
            }           
        }
        
        .gallery__content {
            margin: 0;
        }
        
        .gallery__image {
            width: ${imageSize};
            height: ${imageSize};
            
            ${media.tablet`
                width: ${imageSizeTablet};
                height: ${imageSizeTablet};
            `}
        }
    `}
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    flex-basis: 33.3333%;
    
    ${media.tablet`
        flex-basis: 20%;
    `}
    
    ${media.tablet`
        flex-basis: 25%;
    `}
`;

export const Content = styled.div`
    width: 100%;
    background-color: #ccc;
    cursor: pointer;
    border-radius: 3px;
    overflow: hidden;
    margin: 2.5px;
`;

export const Image = styled.div`
    padding-bottom: 100%;
    position: relative;
    background: url(${props => props.background}) no-repeat center center;
    background-size: cover;
`;