const express = require('express')
const app = express();
const sinesp = require('sinesp-api')

sinesp.configure();

app.get('/placas-sinesp',async (req,res)=>{
     await sinesp.search(req.body.placa).then(dados => {
        console.log(dados);
        res.send(dados);
      }).catch(err => {
        console.log(err);
        res.send(err)
      })
})
app.get('/placas-sinesp/:placa',async (req,res)=>{
  await sinesp.search(req.params.placa).then(dados => {
      console.log(dados);
      res.send(dados);
    }).catch(err => {
      console.log(err);
      res.send(err)
    })
})

app.listen(3000)