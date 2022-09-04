// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import express from 'express';
import { changeContent, create, deletePageRecord, details, getAllPages, update } from './page.controller';

const pageRoute = express.Router();

pageRoute.post('/', create);
pageRoute.post('/:pageId/content', changeContent);

pageRoute.put('/:pageId', update);

pageRoute.delete('/:pageId', deletePageRecord);

pageRoute.get('/:pageId', details);
pageRoute.get('/', getAllPages);


export default pageRoute;