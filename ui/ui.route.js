// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from 'express';
const uiRoute = express.Router();

uiRoute.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});

uiRoute.all('*', (req, res) => {
    res.render('404', { title: '404' });
});

export default uiRoute;