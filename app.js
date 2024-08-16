const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

const hbsFilePath = path.join(__dirname , "./website/dist")
const partialFilePath = path.join(__dirname , "./website/components")

const isrcPath = path.join(__dirname , "./website")


app.use(express.static(isrcPath))

app.set("view engine" , "hbs")
app.set("views" , hbsFilePath)
hbs.registerPartials(partialFilePath)




app.get("/" , (req,res)=>{
    res.render('index')
})

app.listen(8000 , ()=>{
    console.log(`app is running at port no 8000`);
    
})