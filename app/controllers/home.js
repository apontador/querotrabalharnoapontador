var express = require('express'),
    async = require('async'),
    api = require(__base + 'app/internal/api'),
    router = express.Router();

module.exports = function(app) {
    app.use('/', router);
};


function obterLugar(req, res, next) {
    var placeId = req.params.placeId || 'B37822W2';
    async.parallel([
            function(done) {
                api.getPlacePhotos(placeId, {}, done);
            },
            function(done) {
                api.getPlaceById(placeId, {}, done);
            },
            function(done) {
                api.getPlaceReview(placeId, {}, done);
            }
        ],
        function(err, results) {
            if (err) return next(err);
            buscarEstacionamentos(results[1].place, function(err, resultEstacionamento){
                res.render('index', {
                    photos: results[0].photoResults.photos,
                    place: results[1].place,
                    reviews: results[2].reviewResults.reviews,
                    parking: resultEstacionamento.results.places
                });
            })
        });
}

router.get('/:placeId', obterLugar);
router.get('/', obterLugar);

function buscarEstacionamentos(place, done){
   api.search({ q : '', fq : `categories.category.subcategory.id:54`, 'location.lat': place.location.lat, 'location.lng': place.location.lng }, done);
}