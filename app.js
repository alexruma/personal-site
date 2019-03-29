const path = require('path');
const express = require('express');
const hbs = require('hbs');
const app= express();
const port = process.env.PORT || 3000;


let dir=__dirname;



const publicPath = path.join(dir, '/public');
console.log(publicPath)
const viewsPath = path.join(dir, '/template/views');
console.log(viewsPath)
const partialsPath = path.join(dir,'/template/partials')

//Setup handlebars engine
app.set('view engine', 'hbs');
//Set views to alternative path
app.set('views',viewsPath);

//Set partials path
hbs.registerPartials(partialsPath)
//Setup static directory to server
app.use(express.static(path.join(dir, '/public')));



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
