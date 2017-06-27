(function(){   
    'use strict';
    describe('Serviço de chamada do map do local:', function(){
        
        var mapAPIServices;

        beforeEach(function() {
            module('app');
            
            inject(function(_mapAPIServices_){
                mapAPIServices = _mapAPIServices_;
            });

            spyOn(mapAPIServices, 'map');
            mapAPIServices.map('B37822W2', 700, 300);
        });
        
        it('Deve chamar a função', function(){
            expect(mapAPIServices.map).toHaveBeenCalled();
            expect(mapAPIServices.map).toHaveBeenCalledWith('B37822W2', 700, 300);            
        });
    });
})();