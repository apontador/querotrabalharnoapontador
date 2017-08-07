import styled from 'styled-components';

const imageSize = '100px';

export const Container = styled.div`
    position: relative;
    margin-bottom: 15px;
`;

export const List = styled.ul`
    display: flex;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    justify-content: center;
    margin: 3px;
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