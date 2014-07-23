# Coding Dojo Cdiscount

Ici se trouvent les sources du coding dojo réalisé au sein de Cdiscount.

Le thème était comment créer une webapp moderne __maintenable__ avec 
[AngularJS](https://angularjs.org/) puis suivi d'un backend RESTful [NodeJS](http://nodejs.org/), le tout en TDD.

Pour récupérer le projet, suivez les instructions ci-dessous. Il est possible de récupérer le projet aux différentes dates 
via `git checkout day1`. Sinon en clonant le repository, vous aurez la dernière version en date.

N'hésitez pas à forker le repository et l'améliorer vous-même !

## Instructions

Vous trouverez dans un premier temps les instructions pour pouvoir lancer le projet, puis les instructions pour lancer les tests.

### Installation

* Installer [NodeJS](http://nodejs.org/)
* Installer le gestionnaire de paquet frontend : `npm install -g bower`
* Installer les dépendances frontend : `bower install`

Vous pouvez ensuite lancer dans un navigateur le fichier `index.html`

### Installation pour les tests

* Installer le runner de test : `npm install -g karma-cli`
* Installer les dépendances de test : `npm install`

Vous pouvez ensuite lancer les tests avec la commande : `karma start`

## Résumé

### Day1

* Explication fonctionnement AngularJS + Hello World
* Création de l'achitecture du projet client
* Création des vues avec données fictives
* Début de tests

Prochaine étape : Commencer réellement le code des controlleurs en TDD