import styled from 'styled-components';

const imageSize = '100px';

export const Container = styled.div`
    overflow-x: hidden;
    position: relative;
    margin-bottom: 15px;
`;

export const List = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
    height: ${imageSize}; // Altura fixa para evitar que o conteúdo abaixo pule/pisque
    transition: transform .3s ease-out;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    
    &:not(:last-child) {
        margin-right: 5px;
    }
`;

export const Content = styled.div`
    width: 100%;
    background-color: #ccc;
    cursor: pointer;
    border-radius: 3px;
    overflow: hidden;
`;

export const Image = styled.div`
    padding-bottom: 100%;
    position: relative;
    width: ${imageSize};
    height: ${imageSize};
    background: url(${props => props.background}) no-repeat center center;
`;