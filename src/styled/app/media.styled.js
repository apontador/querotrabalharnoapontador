import {css} from 'styled-components';

const sizes = {
    phone: 480,
    tablet: 600,
    desktop: 992
};

const getCss = (size, ...args) => {
    return css`
            @media (min-width: ${size}px) {
                ${css(...args)}
            }
        `;
};

const media = {

    phone: (...args) => {
        return getCss(sizes.phone, ...args);
    },

    tablet: (...args) => {
        return getCss(sizes.tablet, ...args);
    },

    desktop: (...args) => {
        return getCss(sizes.desktop, ...args);
    },
};

export default media;