const express = require("express");
const cors = require('cors')
const app = express();
const {startScrape} = require('./puppeteer/startScraper');
const fs = require('fs');
const port = 3000;


app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());


app.get('/runscraper', async(req, res) => {
  try{
    fs.truncate('src/output/text.txt', 0, function(){console.log('done')});
    await startScrape().then(()=>{
      fs.readFile('src/output/text.txt', 'utf8' , (err, data) => {
        if (err) {
          console.error(err)
          return
        }
        if(data !== ''){
          res.send(data);
        }else{
          res.sendStatus(500);
        }
      })
    });
  }catch(err){
    console.log(err);
  }
});
app.use(express.static('public'));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
  
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
