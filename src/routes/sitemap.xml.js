const fs = require("fs");

const BASE_URL = "https://techcode.in";
const pages = [""];

fs.readdirSync("./src/routes").forEach((file) => {
    file = file.split(".")[0];
    if (file.charAt(0) !== "_" && file !== "sitemap" && file !== "index") {
        pages.push(file);
    }
});

const render = (pages) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${pages.map(
    (page) => `
    <url><loc>${BASE_URL}/${page}</loc><priority>0.85</priority></url>
  `
  )}


</urlset>
`;

export function get(req, res, next) {
  res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader("Content-Type", "application/rss+xml");

  const sitemap = render(pages);
  res.end(sitemap);
}