// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';

// import uiroute
import uiRoute from './ui/ui.route';
import pageRoute from './pages/page.route';


const app = express();
//mongodb connection
app.use(cors({
    origin: 'https://evolvingsolutions.io'
}));
app.use(express.json());
app.use('/resources', express.static(path.join(__dirname, '../public')));
app.use('views', express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');
mongoose.connect('mongodb://localhost:27017/page_builder', { useNewUrlParser: true, useUnifiedTopology: true });


app.use('/pages', pageRoute);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
