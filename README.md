# Template pdf generator

This is a small nodejs-script that generates a pdf-file, given some data and a [twig](https://twig.symfony.com/) template.
It uses [wkhtmltopdf](https://wkhtmltopdf.org/) through the [wkhtmltopdf node package](https://github.com/devongovett/node-wkhtmltopdf). wkhtmltopdf has to be installed.

### Installation

```
npm install template-pdf-generator
```

### Usage

```
var pdfGenerator = require('template-pdf-generator');
var fs = require('fs');

var data = {
  name: 'World'
};

var template = '<h1>Hello {{name}}</h1>';

var css = 'h1 {color: red}';

pdfGenerator(data, template, css).pipe(fs.createWriteStream('out.pdf'));
```

You can also use some options:
```
pdfGenerator(data, template, css, options)
```
The `options` object is the same as documented in the [wkhtmltopdf node package](https://github.com/devongovett/node-wkhtmltopdf#options).

### Usage as a command line tool

Clone or download the project.

From the directory of the project run:
```
node index.js -data data.json -template template.html
```

Options :

  * `-data` or `-D` (mandatory) : path and name of the json data file
  * `-template` or `-T` (mandatory) : path and name of the template file
  * `-css` : path and name of the css file, if necessary
  * `-out` : path and name of the resulting pdf file. By default, the created file is out.pdf in the script root directory.

### Further work

* Allow other template engines than twig
* Allow other encoding than utf-8
