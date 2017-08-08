import {Row} from 'styled/app/styles.styled';
import media from 'styled/app/media.styled';

export const Container = Row.extend`
    
    ${media.desktop`
        display: flex;
        flex-direction: row;
    
        .navigation {
            flex: 1;
            order: 1;
            margin-right: 15px;
        }
        
        .info {
            order: 2;
            flex-basis: 340px;
        }
    `}
`;