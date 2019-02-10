"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res, next) => {
    res.send('Tour booking api');
});
app.listen(process.env.PORT || 9000, () => console.log('Server started...'));
