const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle2" });

  const headerHtml = await page.evaluate(
    () => document.querySelector(".header-pdf").outerHTML
  );

  const footerHtml = await page.evaluate(
    () => document.querySelector(".footer-pdf").outerHTML
  );

  // Hide header on a first page.
  await page.addStyleTag({
    content: "@page:first {margin-top: 0;}"
  });

  await page.pdf({
    path: "hn.pdf",
    displayHeaderFooter: true,
    printBackground: true,
    headerTemplate: headerHtml,
    footerTemplate: footerHtml,
    margin: {
      top: 40,
      bottom: 130
    }
  });

  await browser.close();
})();
