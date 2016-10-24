/*
DIRETIVA PARA CRIAR O TEMPLATE DE CAROUSEL
*/
(function(){   
  'use strict';
  angular.module('catalogoApp').directive('widgetCarousel', ['$rootScope', '$filter', '$interval', function ($rootScope, $filter, $interval) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        content: '='      
      },
      link: function (scope) {

        scope.content.interval = (scope.content.slides.length > 1 && !scope.content.interval ? false : (scope.content.interval ? scope.content.interval : false));
        var filterActive = $filter('filter')(scope.content.slides, {active: true})[0];

        //LOOP ENTRE OS SLIDES
        scope.content.loopSlides = function(callback){
          scope.content.slides.map(function(slide, index){
            slide.id = index;

            if(callback){
              callback(slide, index);
            }
          });
        };

        scope.$watch('carousel', function(){
          scope.content.heightAll = scope.content.height + 30;                
        });
        

        //LIMPAR PARAMENROS DOS SLIDES
        scope.clearSlides = function(){
          scope.content.loopSlides(function(slide){
            slide.direction = '';
          });
        };

        //PARAR INTERVALO (setInterval)
        scope.content.stopInterval = function(){
          if(scope.content.interval){          
            if(scope.content.fnInterval){
              $interval.cancel(scope.content.fnInterval);
            }
          }
        };     

        //INTERACAO DE INVERVALO DA TROCA DO SLIDE
        scope.content.resetInterval = function(){
          //console.log('entrou reset');
          if(scope.content.interval){
            scope.content.stopInterval();

            scope.content.fnInterval = $interval(function(){

              if(scope.content.startInvetval){          
                var setNextSlide;
                scope.content.loopSlides(function(slide){
                  if(slide === scope.content.currentSlide){
                    setNextSlide = (slide.id === scope.content.slides.length-1 ? scope.content.slides[0] : scope.content.slides[slide.id + 1]);            
                  }
                });
                scope.content.currentSlide = setNextSlide;
              }else{
                scope.content.startInvetval = true;
              }

            }, scope.content.interval);
          }
        };      

        //EVENTO DE SELECIONAR OUTRO SLIDE
        scope.content.selectSlide = function(slide){
          scope.content.currentSlide = slide;
          scope.content.resetInterval();        
        };

        //CLASSE DE ATIVACAO
        scope.content.classActive = function(slide){
          if(scope.content.currentSlide){
            return (slide.imageOrigin ? (slide.imageOrigin === scope.content.currentSlide.small ? true : (slide.small === scope.content.currentSlide.small ? true: false)) : (slide.small === scope.content.currentSlide.small ? true: false));
          }
        };

        //BOTAO DE VOLTAR E AVANCAR
        scope.content.setPrevNext = function(prev){
          if(prev){
            scope.content.currentSlide = scope.content.slides[(scope.content.currentSlide.id === 0 ? scope.content.slides.length -1 : scope.content.currentSlide.id -1)];
          }else{
            scope.content.currentSlide = scope.content.slides[(scope.content.currentSlide.id === scope.content.slides.length -1 ? 0 : scope.content.currentSlide.id +1)];
          }

          scope.content.resetInterval();
        }; 

        scope.content.insertStyle = function (){        
          return (scope.content.preview ? 'height:' : 'margin-top:') + Number(scope.content.height-80) + 'px';
        };

        scope.content.modifyCurrentSlide = function(){
          if(scope.content.slides){
            var setActiveSlide = 0;
            scope.content.slides.map(function(slide){
              if(slide.active){
                setActiveSlide = slide;
              }
            });

            scope.content.currentSlide = setActiveSlide;
          }
        };

        //INTERACAO DE TROCA DO SLIDE
        scope.$watch('content.currentSlide', function(){
          if(scope.content.currentSlide){

            scope.clearSlides();
            scope.content.loopSlides(function(slide, position){
              if(slide === scope.content.currentSlide){
                var prev = scope.content.slides[scope.content.slides.length-1];
                var next = scope.content.slides[position+1];
                if(slide.id === 0){
                  if(prev && next){                  
                    prev.direction = 'prev';
                    next.direction = 'next';
                  }

                }else if(slide.id === scope.content.slides.length-1){
                  scope.content.slides[0].direction = 'next';
                  scope.content.slides[position-1].direction = 'prev';

                }else{
                  scope.content.slides[position-1].direction = 'prev';
                  scope.content.slides[position+1].direction = 'next';
                }

                //INTERACAO DE NAVEGACAO DAS FOTOS DE PREVIL
                scope.content.navigate = -scope.content.preview.thumbs.height*position;              
              } 
            });
            
          }else{
            scope.content.currentSlide = scope.content.slides[(filterActive ? filterActive : 0)];
          }
        });

        //INTERACAO DE TROCA DO SLIDE
        scope.$watch('content.slides', function(){
          scope.content.modifyCurrentSlide();
        });

        //INTERACAO DE TROCA DO SLIDE
        scope.$watch('content.imgLoading', function(){
          scope.content.modifyCurrentSlide();
        });

        //INTERVALO ENTRE OS BANNERS        
        scope.content.resetInterval(); 
        
      },
      templateUrl: 'widgets/carousel.html'
    };
  }]);
})();