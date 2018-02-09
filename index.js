const fs = require('fs');

const pdfGenerator = require('./generator');

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

pdfGenerator(data, template, css).pipe(fs.createWriteStream(out));
