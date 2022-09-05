// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { createPage, deletePage, listPages, pageDetails, savePageContent, updatePage } from "./page.services";

export const create = async (req, res) => {
    const pageBody = req.body;
    const page = await createPage(pageBody);
    // check the page to see if it was created or it the page itself is an error object
    if (page) {
        res.statusMessage = "Created";
        res.status(200).json(page);
    } else {
        res.status(500).json({
            error: "Error creating page",
        });

    }
};

export const changeContent = async (req, res) => {
    const pageId = req.params.pageId;
    const pageContent = req.body;
    const page = await savePageContent(pageId, pageContent);
    res.json(page);

}

export const update = async (req, res) => {
    const { pageId } = req.params;
    const pageBody = req.body;
    const page = await updatePage(pageId, pageBody);
    res.json(page);
}

export const details = async (req, res) => {
    const { pageId } = req.params;
    const page = await pageDetails(pageId);
    res.json(page);
}

export const getAllPages = async (req, res) => {
    const pages = await listPages();
    res.json(pages);
}
export const deletePageRecord = async (req, res) => {
    const { pageId } = req.params;
    const page = await deletePage(pageId);
    res.json(page);

}