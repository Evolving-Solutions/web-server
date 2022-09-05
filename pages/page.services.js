// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Pages from './page.modal';

export const createPage = async (pageBody) => {
    const slug = pageBody.title.toLowerCase().split(' ').join('-');
    console.log(`Pagebbody:`, pageBody); // eslint-disable-line no-console
    pageBody.slug = slug;
    const page = new Pages(pageBody);
    const pageResponse = await page.save();

    if (pageResponse) {
        return pageResponse;
    } else {
        throw new Error('Error creating page');
    }
}

export const listPages = async () => {
    const pages = await Pages.find({});
    return pages;
}

export const deletePage = async (pageID) => {
}

export const updatePage = async (pageID) => {
}

export const pageDetails = async (pageID) => {
}

export const savePageContent = async (pageId, pageContent) => {
}
