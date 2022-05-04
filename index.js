require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const api = require('./wp-api.js')

const app = express()

app.engine('hbs', exphbs.engine({
    defaultlayout: "main",
    extname: ".hbs"
}))

app.set('view engine','hbs')


// Homepage
app.get('/', async (req, res) => {
    const homeResponse = await api.getHomePage()
    const home = homeResponse.data
    res.render('home', {
        home,
        style: 'home.css'
    })
})

// Get pages
app.get('/pages', async (req, res)=> {
    const pagesResponse = await api.getPages()
    const pages = pagesResponse.data
    res.render('pages', {pages})
})

// Get all posts
app.get('/posts', async (req, res)=> {
    const postsResponse = await api.getPosts()
    const posts = postsResponse.data
    res.render('posts', { posts })
})

app.listen(8000, () => {
    console.log("http://localhost:8000")
})
