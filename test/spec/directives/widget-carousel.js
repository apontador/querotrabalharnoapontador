(function(){   
    'use strict';

    describe('Diretivas: Widget carousel', function(){

        var compile, scope, elm, interval, timeout;
        
        beforeEach(function(){
            module('catalogoApp');
            module('templates');
            
            inject(function(_$compile_, _$rootScope_, _$interval_, _$timeout_){
                compile = _$compile_;
                scope = _$rootScope_.$new();
                interval = _$interval_;
                timeout = _$timeout_;
            });

            scope.carousel  = {
                id: 'image', name: 'images', size: 10, height: 290,
                classField: 'fieldCarousel', 
                preview: {
                    size: 2,
                    thumbs: {height: 40}
                },
                slides: [
                    {
                        'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                        'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186133.jpg'
                    },
                    {
                        'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186134.jpg',
                        'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186131.jpg',
                    },
                    {
                        'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186135.jpg',
                        'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186137.jpg'
                    },
                    {
                        'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186138.jpg',
                        'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186139.jpg',
                    }
                ]
            };

            elm = compile(angular.element('<widget-carousel content="carousel"></widget-carousel>'))(scope);
            scope.$digest();
        });

        function loopSlides (elmSlide, elmSearch, callback){
            scope.carousel.slides.map(function(slide, index){
                callback(slide, index, angular.element(elmSearch, elmSlide)[index]);
            });
        }

        it('Deve renderizar as estrelas', function(){
            expect(elm.html()).toBeDefined();
        });

        it('Deve conter 6 slides', function(){
            var contentImgFull = elm.find('.carousel-inner-preview');
            expect(angular.element('.item', contentImgFull).length).toBe(4);
        });

         it('Deve conter 0 slides', function(){
            scope.carousel.slides = [];
            scope.$digest();

            expect(elm.find('.carousel-inner-preview').html()).toBeDefined();
        });

        it('Deve conter 3 images de previl', function(){
            var contentImgFull = elm.find('.carousel-indicators-preview');
            expect(angular.element('li', contentImgFull).length).toBe(4);
        }); 

        it('Deve conter para cada slide uma imagem grande', function(){
            loopSlides(elm.find('.carousel-inner-preview'), '.item', function(slide, index, elmSlide){
                expect(angular.element('img', elmSlide).length).toEqual(1);
                expect(angular.element('img', elmSlide).attr('src')).toEqual(slide.large);
            });            
        });

        it('Deve conter para cada slide uma imagem de previl', function(){
            loopSlides(elm.find('.carousel-indicators-preview'), 'li', function(slide, index, elmSlide){
                expect(angular.element('img', elmSlide).length).toEqual(1);
                expect(angular.element('img', elmSlide).attr('src')).toEqual(slide.small);
            });            
        });

        it('Deve conter a navegação por setas', function(){
            expect(elm.find('.carousel-control top')).toBeDefined();
            expect(elm.find('.carousel-control bottom')).toBeDefined();
        });

        it('Deve mostrar as setas de navegação se houver mais de uma imagem', function(){
            scope.carousel.slides = [
                {
                    'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                    'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg'
                }
            ];
            scope.$digest();

            expect(elm.find('.carousel-inner-preview .item').length).toEqual(1);
            expect(elm.find('.carousel-control.top').html()).not.toBeDefined();
            expect(elm.find('.carousel-control.bottom').html()).not.toBeDefined();

            scope.carousel.slides = [
                {
                    'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                    'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg'
                },
                {
                    'small': 'https://imagesapt.apontador-assets.com/fit-in/160x120/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg',
                    'large': 'https://imagesapt.apontador-assets.com/fit-in/640x480/6a622c729fae43ee8c4126ec086273a5/parque-do-ibirapuera-9872809045186132.jpg'
                }
            ];
            scope.$digest();
            
            expect(elm.find('.carousel-inner-preview .item').length).toEqual(2);
            expect(elm.find('.carousel-control.top').html()).toBeDefined();
            expect(elm.find('.carousel-control.bottom').html()).toBeDefined();
        });

        it('Não deve mostrar a navegação mesmo se houver mais de um slide', function(){
            scope.carousel.noControl = true;
            scope.carousel.preview = null;
            scope.$digest();

            expect(elm.find('.carousel-inner-preview .item').length).toEqual(4);
            expect(elm.find('.carousel-control.top').html()).not.toBeDefined();
            expect(elm.find('.carousel-control.bottom').html()).not.toBeDefined();
        });

        it('Deve mostrar uma imagem grande', function(){
            expect(scope.carousel.currentSlide).toBeDefined();
            expect(elm.find('.item.active').length).toEqual(1);
        });

        it('Se houver imagem pré-setada [slides: {active}], deve ser visualizada esta imagem de inicialização', function(){

            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[0]);

            scope.carousel.slides[3].active = true;
            scope.carousel.modifyCurrentSlide();
            scope.$digest();
            
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[3]);
        });

        it('Se não houver o parâmetro {carousel: {currentSlide}} deve setar o primeiro item dos slides', function(){
            scope.carousel.currentSlide = null;
            scope.$digest();
            
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[0]);
            expect(elm.find('.item.active img').attr('src')).toEqual(scope.carousel.slides[0].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toEqual(scope.carousel.slides[0].small);
        });

        it('Deve mostrar o slide setado no parâmetro {carousel: {currentSlide}}', function(){
            scope.carousel.currentSlide = scope.carousel.slides[2];
            scope.$digest();
            
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[2]);
            expect(elm.find('.item.active img').attr('src')).toEqual(scope.carousel.slides[2].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toEqual(scope.carousel.slides[2].small);            
        });


        it('Deve trocar a imagem grande quando clicar nos botões de navegação', function(){
            scope.carousel.currentSlide = scope.carousel.slides[2];
            scope.$digest();
            expect(elm.find('.item.active img').attr('src')).toEqual(scope.carousel.slides[2].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toEqual(scope.carousel.slides[2].small);
            

            angular.element('.carousel-control.top', elm).triggerHandler('click');
            scope.$digest();
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[1]);
            expect(elm.find('.item.active img').attr('src')).toEqual(scope.carousel.slides[1].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toEqual(scope.carousel.slides[1].small);
            
            angular.element('.carousel-control.top', elm).triggerHandler('click');
            scope.$digest();
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[0]);
            expect(elm.find('.item.active img').attr('src')).toBe(scope.carousel.slides[0].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toBe(scope.carousel.slides[0].small);


            angular.element('.carousel-control.bottom', elm).triggerHandler('click');
            scope.$digest();
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[1]);
            expect(elm.find('.item.active img').attr('src')).toBe(scope.carousel.slides[1].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toBe(scope.carousel.slides[1].small);
        });

        it('Quando clicar na imagem do previl deve seta-la e trocar a imagem grande', function(){            
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[0]);
            
            var itemPrevil = elm.find('.carousel-indicators-preview li')[2];
            angular.element(itemPrevil).triggerHandler('click');
            scope.$digest();

            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[2]);
            expect(elm.find('.item.active img').attr('src')).toEqual(scope.carousel.slides[2].large);
            expect(elm.find('.carousel-indicators-preview .active img').attr('src')).toEqual(scope.carousel.slides[2].small);
        });

        it('Deve trocar de imagem a cada 3 segundos', function(){
            expect(scope.carousel.interval).toBe(false);

            scope.carousel.interval = 3000;
            scope.carousel.resetInterval();

            interval.flush(scope.carousel.interval);
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[0]);
            
            interval.flush(scope.carousel.interval);
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[1]);
        });

        it('Deve parar de trocar a imagem', function(){
            expect(scope.carousel.interval).toBe(false);

            scope.carousel.interval = 3000;
            scope.carousel.resetInterval();

            interval.flush(scope.carousel.interval);
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[0]);
            
            interval.flush(scope.carousel.interval);
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[1]);
            
            scope.carousel.stopInterval();
            interval.flush(scope.carousel.interval);
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[1]);
            
            interval.flush(scope.carousel.interval);
            expect(scope.carousel.currentSlide).toEqual(scope.carousel.slides[1]);
        });
        

    });
})();