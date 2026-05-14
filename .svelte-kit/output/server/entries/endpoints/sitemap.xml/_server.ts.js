function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://alex-morgan.dev/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
export {
  GET
};
