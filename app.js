const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app= express();

let dirdir=__dirname;
console.log('dir '+dirdir);

const directory =path.join(__dirname,'../personal-site/personal-site');
const publicPath = path.join(directory, '../public');
console.log(directory)
const viewsPath = path.join(directory, '../template/views');

const partialsPath = path.join(directory,'../template/partials')

//Setup handlebars engine
app.set('view engine', 'hbs');
//Set views to alternative path
app.set('views',viewsPath);

//Set partials path
hbs.registerPartials(partialsPath)
//Setup static directory to server
app.use(express.static(path.join(directory, '../public')));



app.get('/', (req,res)=> {
  res.send("Alex's Homepage");
})
console.log(path.dirname('../public'))
console.log(publicPath);


app.get('/test', (req,res)=>{

   res.render('test.html', {
     name: "Alex"
   })
 });

app.get('/nba', (req,res)=>{

   res.render('nba', {
     name: "Alex"
   })
 });


app.listen(4000, () => {
  console.log('Server is up on port 4000')
});