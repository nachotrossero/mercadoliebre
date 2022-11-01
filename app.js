const express = require('express');
const path = require('path');

const app = express();


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath))

let PORT = process.ENV.PORT || 3000;
app.listen(PORT,()=>{
    console.log('Listen on port ' + 3000)});

//*ruta al HOME
app.get('/',(req, res)=>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'));
    console.log('Entré en la home.');
})
