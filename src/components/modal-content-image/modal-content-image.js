import React from 'react';
import {Image} from 'styled/components/modal-content-image/modal-content-image.styled';

const ModalContentImage = (props) => (
    <Image src={props.photo.large}/>
);

export default ModalContentImage;