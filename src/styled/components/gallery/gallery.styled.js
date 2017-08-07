import styled, {css} from 'styled-components';

const imageSize = '100px';

export const Container = styled.div`
    position: relative;
    margin-bottom: 15px;
    margin: -2px;

    ${props => props.carousel && css`
        margin: 0 0 15px 0;
        overflow-x: hidden;
        
        .gallery__list {
            flex-wrap: initial;
            height: ${imageSize}; // Altura fixa para evitar que o conteúdo abaixo pule/pisque
            transition: transform .3s ease-out;
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
        }
    `}
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    
    ${props => props.carousel && css`
        flex-wrap: initial;
        height: ${imageSize}; // Altura fixa para evitar que o conteúdo abaixo pule/pisque
        transition: transform .3s ease-out;
    `}
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    flex-basis: 33.3333%;
    
    ${props => props.carousel && css`
        flex-basis: initial;
        
        &:not(:last-child) {
            margin-right: 5px;
        }
    `}
`;

export const Content = styled.div`
    width: 100%;
    background-color: #ccc;
    cursor: pointer;
    border-radius: 3px;
    overflow: hidden;
    margin: 2px;
    
    ${props => props.carousel && css`
        margin: 0;
    `}
`;

export const Image = styled.div`
    padding-bottom: 100%;
    position: relative;
    background: url(${props => props.background}) no-repeat center center;
    background-size: cover;
    
    ${props => props.carousel && css`
        width: ${imageSize};
        height: ${imageSize};
    `}
`;