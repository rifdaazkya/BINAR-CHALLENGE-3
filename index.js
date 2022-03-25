// impor modul express ej layouts
const expressLayouts = require('express-ejs-layouts')
// import express
const express = require('express')
const app = express()
const port = 1500

// setup view engine
app.set('view engine', 'ejs')
// setup public folder
app.use(express.static('public'))
app.use('/images', express.static('images'));
app.use(expressLayouts)


// login
app.get('/', (req, res) => {
    res.render('login', { layout: './login'})
})
app.post("/", function (req, res) {
    res.redirect("/dashboard");
  })

// dashboard
app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

// product
app.get('/product', (req, res) => {
    res.render('product')
})

// list car
app.get('/list-car', (req, res) => {
    res.render('list-car')
})

// add new car
app.get('/add-new-car', (req, res) => {
    res.render('add-new-car')
})
app.post("/add-new-car", function (req, res) {
    res.redirect("/list-car");
  })



app.listen(port, () => { console.log(`localhost:1500 is running...`) })