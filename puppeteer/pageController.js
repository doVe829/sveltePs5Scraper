const pageScraper = require('.//pageScraper');
const arrOfStores = require('./stores');


async function scrapeAll(browserInstance){
    for(let store of arrOfStores){
        let browser;
        try{
            browser = await browserInstance;
            await pageScraper.scraper(browser,store.url, store.mainContainer, store.text, store.store, store.privacyNotice);
        }
        catch(err){
            console.log("Could not resolve the browser instance => ", err);
        }
    }
    

}

module.exports = (browserInstance) => scrapeAll(browserInstance)