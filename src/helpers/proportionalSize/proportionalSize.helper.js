/**
 * Calcula o tamanho proporcional de acordo com o tamanho da imagem e container
 * @param originalWidth
 * @param originalHeight
 * @param maxWidth
 * @param maxHeight
 * @returns {*}
 */
const proportionalSize = (originalWidth, originalHeight, maxWidth, maxHeight) => {

    let width, height;

    if (originalWidth < maxWidth && originalHeight < maxHeight) {
        return {
            width: originalWidth,
            height: originalHeight
        };
    }

    // Paisagem (assumindo paisagem)
    width  = (originalWidth > maxWidth) ? maxWidth : originalWidth;
    height = Math.ceil((width * originalHeight) / originalWidth);

    // Retrato
    if (originalHeight > originalWidth) {
        height = (originalHeight > maxHeight) ? maxHeight : originalHeight;
        width  = Math.ceil((height * originalWidth) / originalHeight);
    }

    if (width > maxWidth) {
        width  = maxWidth;
        height = Math.ceil((width * originalHeight) / originalWidth);
    }

    if (height > maxHeight) {
        height = maxHeight;
        width  = Math.ceil((height * originalWidth) / originalHeight);
    }

    return {
        width,
        height
    };
};

export default proportionalSize;