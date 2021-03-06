**survey.js** is a JavaScript Survey Library. It is a modern way to add a survey to your website. It uses JSON for survey metadata and results.
[![Build Status](https://travis-ci.org/andrewtelnov/surveyjs.svg?branch=master)](https://travis-ci.org/andrewtelnov/surveyjs)
##Getting started
[![Join the chat at https://gitter.im/andrewtelnov/surveyjs](https://badges.gitter.im/andrewtelnov/surveyjs.svg)](https://gitter.im/andrewtelnov/surveyjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) 

To find our more about the library go
* to the [surveyjs.org site](http://surveyjs.org) 
* explore the live [Examples](http://surveyjs.org/examples/) 
* and build a survey JSON using [Visual Editor](http://surveyjs.org/builder/)



Testing markdown here 

[I'm a reference-style link][Arbitrary case-insensitive reference text]
[I'm a reference-style link][Arbitrary case-insensitive reference text]
[I'm a reference-style link][Arbitrary case-insensitive reference text]


[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[jump][Jumped over the lazy dog]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com


Install the library using npm.

Angular2 version:
```
npm install survey-angular
```
jQuery version:
```
npm install survey-jquery
```
Knockout version:
```
npm install survey-knockout
```
React version:
```
npm install survey-react
```

Or dowload the latest version as zip file [Download](http://surveyjs.org/downloads/surveyjs.zip)

##Building survey.js from sources

To build library yourself:

 1. **Clone the repo from GitHub**  
	```
	git clone https://github.com/andrewtelnov/surveyjs.git
	cd surveyjs
	```

 2. **Acquire build dependencies.** Make sure you have [Node.js](http://nodejs.org/) installed on your workstation. This is only needed to _build_ surveyjs from sources.  
	```
	npm install -g gulp
	npm install -g typings
	npm install
	```
	The first `npm` command sets up the popular [Gulp](http://gulpjs.com/) build tool. 
	The second `npm` command sets up the Typescript Definition Manager [Typings](https://github.com/typings/typings).

 3. **Create TypeScript definition files**
	```
	typings install
	```
	Typescript definition files should be located at 'typings' directory.

 4. **Build the library**
	```
	gulp makedist
	```
	After that you should have the library at 'dist' directory.

 5. **Run unit tests**
	```
	gulp copyfiles
	gulp test_ci
	```
	The first command will copy all required files to 'wwwroot' directory and the last command will run unit tests usign [Karma](https://karma-runner.github.io/0.13/index.html)

##Create your own question type.
Explore the [example](https://github.com/andrewtelnov/surveyjs/tree/master/src/plugins) of adding a new question type into your survey library.

##License

MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)


##Visual Editor

Visual Editor sources are [here](https://github.com/andrewtelnov/surveyjs.editor)
