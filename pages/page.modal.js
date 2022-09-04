// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const mongoose = require('mongoose');

const { Schema } = mongoose;

const Page = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },

    slug: {
        type: String,
        required: true,
    },

}, { timestamp: true });

export default mongoose.model('Pages', Page);