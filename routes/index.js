var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Image Scrabble Game' });
});

<<<<<<< Updated upstream
router.get('/about', function(req, res, next) {
  res.render('about', {"msg": "Hola Mundo" });
});


=======

router.get('/about',function(req,res,next){
  res.render('about',{"msg":"Hola Mundo!!!"});
}
);
>>>>>>> Stashed changes
module.exports = router;
