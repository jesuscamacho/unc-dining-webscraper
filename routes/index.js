var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
var express = require('express');
var router = express.Router();
// const rp = require('request-promise');
// const $ = require('cheerio');
// const potusParse = require('../potusParse');
//const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';
//const url = 'https://dining.unc.edu/locations/chase/?date=2018-11-16'


//var potusScraper = require('../potusScraper');
/* GET home page. */
router.get('/', async function(req, res, next) {
  //var x = await potusScraper;
  //console.log(x)
  res.render('index', { title: 'Express' });
});

/*
router.get('/', function(req, res, next) {
  console.log("yeeeeee");
  //res.render('index', { title: 'Express' },);


  rp(url)
  .then(function(html){
    const wikiUrls = [];
    for (let i = 0; i < 10; i++) {
      //wikiUrls.push($('li = "menu-item-li"', html)[i].attribs.href);
      wikiUrls.push($('li = "menu-item-li"', html));
    }
    console.log(wikiUrls)
    // return Promise.all(
    //     wikiUrls.map(function(url) {
    //       return potusParse('https://en.wikipedia.org' + url);
    //     })
    //   );

  })
  // .then(function(presidents) {
  //   //console.log(presidents);
  //   res.send(presidents)
  //   //return presidents;
  // })
  .catch(function(err){
    //handle error
    console.log(err);
  });

}); */



module.exports = router;
