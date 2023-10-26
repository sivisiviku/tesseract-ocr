var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var { prepareFile, processFile } = require('./ocrService')

app.use(cors())
app.use(express.static(__dirname + '/public'));
app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ limit: '50mb' }));
app.use(bodyParser.json());

app.post('/upload', async (req, res, _next) => {
  prepareFile(req.body.image);
  const result = await processFile(req.headers.name);

  let idNo = new String(), name = new String();

  let ttl = '';
  let i = 0;
  for (const r of result) {
    if (i == 0) {
      const split = r.toString().split(" ");
      idNo = split[split.length - 1];
    }
    if (i == 1) {
      let regExp = /[^a-zA-Z ]/g;
      name = r.toString().replace(regExp, "").trim().toUpperCase();
    }
    if(i==2){
      ttl=r.toString()
    }
    i++;
  }

  return res.json({
    "idNo": idNo,
    "name": name,
    "ttl": ttl
  })

});

//getting the front-end
app.get('/', function (_req, res, _next) {
  res.render('index.ejs');
});
app.listen(1000);

console.log('Running on port 1000');