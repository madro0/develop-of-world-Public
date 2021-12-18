require('./config/config.js');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.urlencoded({}));
app.use(require('./routes/indexRoute'));


mongoose.connect(process.env.URLDB, {useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err){
        throw err
    }else{
        console.log('Base online');
    }
});

app.listen(process.env.PORT, ()=>{
    console.log(`Server corriendo desde el puerto ${process.env.PORT}`);
})