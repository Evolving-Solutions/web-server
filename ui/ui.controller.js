// Copyright (c) 2022 Evolving Software Corporation
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { listPages } from "../pages/page.services"

export const home = async (req, res) => {
    const pages = await listPages();
    res.render("home", { pages });
}
