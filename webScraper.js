const rp = require('request-promise');
const $ = require('cheerio');
//const potusParse = require('./potusParse');
var date = new Date().toISOString();
//var date = new Date(Date.now()).toLocaleString();
var index = date.indexOf('T');
formated_date = date.slice(0,index);
console.log(formated_date);
const url = 'https://dining.unc.edu/locations/chase/?date='+ formated_date;
//console.log(url);
//723 16
//672 17


rp(url)
  .then(function(html){
    var food = [];
    // $('.c-tabs-nav__link is-active',html).each((i,x)=>{
    //     const time = $(x).text();
    //     console.log(time);
    // })
    $('.menu-item-li a',html).each((i,el)=>{
        
        const item = $(el).text();
        food.push(item);
        //console.log(item);
    });

    console.log(food.length)

    // food.forEach(element => { 
    //     if (element == "Assorted Donuts"){
    //         console.log(element+ " *")
    //     } 
    //     if (element == "Cajun Chili Topping"){
    //         console.log(element+ " *")
    //     }
    // });
    //console.log(html)

    // return Promise.all(
    //     wikiUrls.map(function(url) {
    //       return potusParse('https://en.wikipedia.org' + url);
    //     })
    //   );

  })
//   .then(function(presidents) {
//     //console.log(presidents);
//     return presidents;
//   })
  .catch(function(err){
    //handle error
    console.log(err);
  });
//}