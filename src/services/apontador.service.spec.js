import ApontadorService from './apontador.service';

beforeEach(() => {

    class LocalStorageMock {

        constructor() {
            this.store = {};
        }

        clear() {
            this.store = {};
        }

        getItem(key) {
            return this.store[key] || null;
        }

        setItem(key, value) {
            this.store[key] = value.toString();
        }

        removeItem(key) {
            delete this.store[key];
        }
    }

    global.localStorage = new LocalStorageMock();

    global.fetch = jest.fn().mockImplementation(() => {

        const promise = new Promise(resolve => {
            resolve({
                json: function() {
                    return {'access_token': 'guilherme'}
                }
            });
        });

        return promise;
    });

});

describe('ApontadorService', () => {

    const apontadorService = new ApontadorService();

    test('Gravou o access_token no localStorage', async () => {

        const response = await apontadorService.setAccessKey();

        expect(response.access_token).toEqual('guilherme');

    });

});