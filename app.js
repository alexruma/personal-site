const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app= express();
const port = process.env.PORT || 3000;


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
  res.render("index");
});



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
 app.get('*', (req,res) => {
   res.render('404')
 });

app.listen(port, () => {
  console.log('Server is up on port '+ port)
});
