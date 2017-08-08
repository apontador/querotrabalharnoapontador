import {Row} from 'styled/app/styles.styled';
import media from 'styled/app/media.styled';

export const Container = Row.extend`
    position: relative;
  
    ${media.tablet`
        .statistics {
            position: absolute;
            top: 160px;
            right: 20px;
            border-top: none;
        }
    `}
`;