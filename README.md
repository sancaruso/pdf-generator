# Pdf generator

This is a small nodejs-script that generates a pdf-file, given some data and a [twig](https://twig.symfony.com/) template.
It uses [wkhtmltopdf](https://wkhtmltopdf.org/).

### Installation

* Clone the projet
* `npm install`

### Usage
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
