const puppeteer = require("puppeteer");

async function printPdf(puppeteerParams) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

  // Hide header on a first page.
  await page.addStyleTag({
    content: "@page:first {margin-top: 0;}"
  });

  await page.pdf({
    path: "../hn.pdf",
    displayHeaderFooter: true,
    printBackground: true,
    headerTemplate: puppeteerParams.headerTemplate,
    footerTemplate: puppeteerParams.footerTemplate,
    margin: puppeteerParams.margin
  });

  await browser.close();
}

module.exports = {
  printPdf
};
