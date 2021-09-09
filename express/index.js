
const express = require('express')
const app = express()
const port = 3000;
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path')

require('dotenv').config()

const { API_KEY = '' } = process.env;

app.use('/3', createProxyMiddleware({
    target: 'https://api.themoviedb.org',
    pathRewrite: function(path, req) {
        // currently no query parameters

        console.log(path);
        if(path.indexOf('?') === -1) {
            return path + '?api_key='+ API_KEY;
        }

        console.log(path + '&api_key=' + API_KEY);
        return path + '&api_key=' + API_KEY;
    },
    changeOrigin: true,
}));


https://api.themoviedb.org/3/movie/550?api_key=e4fc096b1f7f3fbf48013349c7456fef


app.use('/', express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
