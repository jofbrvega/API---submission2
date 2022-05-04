const axios = require('axios').default

// Här hämtar vi BASE_URL från env-filen och ger tillgång till variabeln i den filen
function api(){
    return axios.create({
        baseURL: process.env.BASE_URL,
    })
}

// Get homepage
module.exports.getHomePage = async function() {
    return await api().get('/')
}

// Get pages
module.exports.getPages = async function(){
    return await api().get('/pages')
}
// Get all posts
module.exports.getPosts = async function(){
    return await api().get('/posts')
}