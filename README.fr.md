# Génération de pdf à partir de données

Ceci est un petit script en node qui permet de générer un pdf, à partir de données au format json et d'un template [twig](https://twig.symfony.com/).
Il utilise [wkhtmltopdf](https://wkhtmltopdf.org/). Il faut que wkhtmltopdf soit installé.

### Installation :

* Cloner le projet
* `npm install`

### Utilisation :
```
node index.js -data data.json -template template.html
```

Options :

  * `-data` ou `-D` (obligatoire) : chemin et nom du fichier de données json
  * `-template` ou `-T` (obligatoire) : chemin et nom du fichier de template
  * `-css` : chemin du fichier css, si nécessaire
  * `-out` : chemin du fichier pdf résultant. Par défaut, le fichier créé est out.pdf dans le répertoire racine du script
