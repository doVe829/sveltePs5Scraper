const browserObject = require('./browser');
const scraperController = require('./pageController');



// Pass the browser instance to the scraper controller
async function startScrape(){
    let browserInstance = browserObject.startBrowser();
    await scraperController(browserInstance)
}
    
module.exports.startScrape = startScrape;