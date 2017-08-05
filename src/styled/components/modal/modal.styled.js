import styled from 'styled-components';

const getSize = (size) => {
    return size ? size + 'px' : 'auto';
};

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    animation: fade 0.3s forwards;
    z-index: 10;
    
    @keyframes fade {
        from {
            opacity: 0;
        }
        
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: ${props => getSize(props.width)};
    height: ${props => getSize(props.height)};
    background-color: #fff;
    border-radius: 2px;
    animation: zoom 0.3s forwards;
    border-radius: 3px;
    overflow: hidden;
    margin: 10px;
    
    @keyframes zoom {
        from {
            transform: scale(0);
        }
        
        to {
            transform: scale(1);
        }
    }
`;

export const Close = styled.div`
    position: absolute;
    top: 0;
    right: 2px;
    line-height: 20px;
    font-size: 35px;
    padding: 10px;
    cursor: pointer;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
`;