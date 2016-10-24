(function(){   
    'use strict';
    describe('Filtros:', function(){
        
        var filter;

        beforeEach(function() {
            module('catalogoApp');
            
            inject(function(_$filter_) {
                filter = _$filter_;
            });
        });
        
        it('Iframe', function(){
            var urlIframe = filter('trustAsResourceUrl')('http://globo.com');
            expect(urlIframe.$$unwrapTrustedValue()).toBeDefined();
            expect(urlIframe.$$unwrapTrustedValue()).not.toBe('globo.com');
            expect(urlIframe.$$unwrapTrustedValue()).toBe('http://globo.com');
        });        
    });
})();