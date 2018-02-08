const fs = require('fs');
const wkhtmltopdf = require('wkhtmltopdf');
const Twig = require('twig'), twig = Twig.twig;

const dataTags = ['-data', '-D'];
const cssTags = ['-css'];
const templateTags = ['-T', '-template'];

let dataFile, cssFile, templateFile;
let data, css, template, out = 'out.pdf';

process.argv.forEach((val, index, arr) => {
  if (dataTags.includes(val)) {
    dataFile = arr[index + 1];
  } else if (cssTags.includes(val)) {
    cssFile = arr[index + 1];
  } else if (templateTags.includes(val)) {
    templateFile = arr[index + 1];
  } else if (val === '-out') {
    out = arr[index + 1];
  }
});

if (!dataFile) {
  console.log('No data file specified');
  process.exit(1);
}

if (!templateFile) {
  console.log('No template file specified');
  process.exit(1);
}

try {
  data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
} catch (e) {
  console.log(e.message);
  process.exit(1);
}

try {
  template = fs.readFileSync(templateFile, 'utf8');
} catch (e) {
  console.log(e.message);
  process.exit(1);
}

if (cssFile) {
  try {
    css = fs.readFileSync(cssFile, 'utf8');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
}

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

wkhtmltopdf(renderedTemplate).pipe(fs.createWriteStream(out));
