var express = require('express');
var router = express.Router();
// var ctrlMain = require('../controllers/main'); //3.4
var ctrlLocations = require('../controllers/locations');
// var ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.login);
router.get('/main', ctrlLocations.main);
//get pets
router.get('/pets', ctrlLocations.pets); 
//get goods
router.get('/goods', ctrlLocations.goods);
/* GET home page. */
// var homepageController = function (req, res) {
// 	res.render('index', {title: 'Express'});
// }
// router.get('/', homepageController);
// router.get('/', ctrlMain.index);
 
module.exports = router;
