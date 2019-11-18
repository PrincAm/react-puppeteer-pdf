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

  await page.addStyleTag({
    content: "@page:first {margin-top: 0;}"
  });

  // Create PDF from selected query, not including styles
  // const body = await page.evaluate(
  //   () => document.querySelector(".Body").outerHTML
  // );
  // await page.setContent(body);

  await page.pdf({
    path: "hn.pdf",
    displayHeaderFooter: true,
    printBackground: true,
    headerTemplate: headerHtml,
    footerTemplate: footerHtml,
    margin: {
      top: "50px",
      bottom: "240px"
    }
  });

  await browser.close();
})();
