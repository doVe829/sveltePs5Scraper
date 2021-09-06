const arrOfStores = require('./stores');
const fs = require('fs');
let jsonArr = [];

const scraperObject = {
    async scraper(browser, url, mainSelect, text,store,privacyNotice = ''){
        let page = await browser.newPage();
        console.log(`Navigating to ${url}...`);
        await page.goto(url);
        if(privacyNotice !== ''){
            await page.click(privacyNotice);
        }
         // Wait for the required DOM to be rendered
        await page.waitForSelector(mainSelect);
        // search for DOM element
        let element = await page.$(text);
        let value = await page.evaluate(el => el.textContent, element);
        // to filter out results where ps5 is not in stock
        const target = /nicht verfügbar|Derzeit nicht verfügbar|bereits vergriffen|ausverkauft|nicht gekauft|nicht erhältlich/gmi;
        if(value.search(target) === -1){
            // array was appending already existing data
            objIndex = jsonArr.findIndex((obj => obj.STORE === store));
            if(objIndex !== -1){
                jsonArr[objIndex].STORE = store;
            }else{
                jsonArr.push({STORE: store, URL: url});
            }
            
        }

        // to check if all pages have been opened, there is always one empty tab so +1
         await browser.pages().then((res)=>{
            if(res.length === arrOfStores.length + 1){
                if(jsonArr.length > -1 ){
                  fs.writeFile("src/output/text.txt", JSON.stringify(jsonArr), (err) => {
                    if (err) {
                      console.log(err);
                    }
                  });
                }
                browser.close();
            }
        });
    }
}

module.exports = scraperObject;