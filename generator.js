const wkhtmltopdf = require('wkhtmltopdf');
const Twig = require('twig'), twig = Twig.twig;

const pdfGenerator = function(data, template, css) {
  const renderedTemplate = `<html>
  <head>
    <style>${css}</style>
    <meta charset="UTF-8">
  </head>
  <body>
  ` +
  twig({data: template}).render(data)
  + `
  </body>
  </html>
  `;

  return wkhtmltopdf(renderedTemplate);
}

module.exports = pdfGenerator;
