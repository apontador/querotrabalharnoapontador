import proportionalSize from './proportionalSize.helper'

test('Tamanho proporciorcional de uma imagem 640x480 em resolução 300px', () => {

    const size = {
        width: 320,
        height: 240
    };

    expect(proportionalSize(640, 480, 320)).toEqual(size);
});