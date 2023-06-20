const express = require('express');
require('./db/conn');

const Anime = require("./models/animes");
const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  //res.setHeader('Cache-Control','no-cache, max-age=0');
  res.header('Access-Control-Allow-Headers', 'Content-Type, cache-control,Authorization, Content-Length,Origin, X-Requested-With, Content-Type, Accept');
  return next();
});

app.options("/*", function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, cache-control,Authorization, Content-Length, X-Requested-With,Origin, X-Requested-With, Content-Type, Accept');
  res.send(200);
});

app.get('/animes', async(req, res) => {
  try{
    const animesDB= await Anime.find();
    res.json(animesDB)

  }catch(e){
    res.send(e)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})