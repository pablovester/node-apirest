# Academy - Node.Js

![Globant](assets/globant.jpg)

# Important
- Coordinador
  - Luca Sartori -> luca.sartori@globant.com
- Slack channel (https://globant.slack.com)
  - #academy_nodejs_2019
- Tutores
  - Marquez German -> german.marquez@globant.com
  - Nicolás Herrera -> nicolas.herrera@globant.com

## Objective
Aprender los conceptos básico para poder desarrollar APIs RESTFul en Nodejs

## Preconditions
Tener conocimientos básico de javascript, GIT, OOP.

## Duration
El tiempo asignado al academy es de 2 semanas (10 días hábiles)

## Modality
Utilizaremos una modalidad virtual donde vamos a hacer meetings día por medio para hacer un seguimiento del progreso, evacuar dudas y reforzar los temas necesarios.
Las meetings (_cheeckpoint_) serán grupales por hangout para las cuales se enviarán invites por mail.

Tambien usaremos un channel de slack donde se podrán hacer consultas y/o sugerencias.

El material que usaremos será en gran parte cursos de udemy que seleccionamos. Por otro lado complemetaremos algunos temas con material de lectura.

Todo los conceptos aprendidos deberán ser aplicados a un ejercicio final el cual vamos a usar para evaluarlos.

## Roadmap
| Date      | Description |
| --------- | -----|
| 08/05  | <b>Kick off / Setting accounts / <i>Getting Started</i></b> |
| 09/05  | Setting the environment / <i>Building RESTful API's Using Express</i> |
| 10/05  | <b>Cheeckpoint</b> |
| <s>11/05</s>  | <s>Weekend</s> |
| <s>12/05</s>  | <s>Weekend</s> |
| 13/05  | <b>Cheeckpoint / <i>Asynchronous JavaScript</i></b> |
| 14/05  | <i>Sequelize</i> |
| 15/05  | <b>Cheeckpoint</b> |
| 16/05  | <i>JWT / TEST</i> |
| 17/05  | <b>Cheeckpoint</b> |
| <s>18/05</s>  | <s>Weekend</s> |
| <s>19/05</s>  | <s>Weekend</s> |
| 20/05  | <b>Cheeckpoint</b> |
| 21/05  | <i>Plus (Docker)</i> |
| 22/05  | <b>Final cheeckpoint</b> |
| 23/05  | Review |

## Let's do it
Here goes all the material and excersises, enjoy it. :)

### Getting Started
[SECTION 1 | Getting Started](https://globant.udemy.com/nodejs-master-class/)
  - Welcome
  - What is Node
  - Node Architecture
  - How Node Works
  - Installing Node
  - Your First Node Program
  - Course Structure
  
[SECTION 2 | Node Module System](https://globant.udemy.com/nodejs-master-class/)
  - Introduction
  - Global Object
  - Modules
  - Creating a Module
  - Loading a Module
  - Module Wrapper Function
  - Path Module
  - OS Module
  - File System Module
  - Events Module
  - Event Arguments
  - Extending Event Emitter
  - HTTP Module
  
[SECTION 3 | Node Package Manager](https://globant.udemy.com/nodejs-master-class/)
  - Introduction
  - Package.json
  - Installing a Node Package
  - Using a Package
  - Package Dependencies
  - NPM Packages and Source Control
  - Semantic Versioning
  - Listing the Installed Packages
  - Viewing Registry Info for a Package
  - Installing a Specific Version of a Package
  - Updating Local Packages
  - DevDependencies
  - Uninstalling a Package
  - Working with Global Packages
  - Publishing a Package
  - Updating a Published Package

#### ~~Not so~~ optional reading
  - [NPM](https://docs.npmjs.com/about-npm)
  - [NVM](https://github.com/creationix/nvm)
  - [Modules](https://www.nodebeginner.org/blog/post/nodejs-tutorial-what-are-node.js-modules/)
  - [Debugging](https://www.nodebeginner.org/blog/post/nodejs-tutorial-what-are-node.js-modules/)
  - [Debugging on VS-Code](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
  - [Module System](https://medium.freecodecamp.org/anatomy-of-js-module-systems-and-building-libraries-fadcd8dbd0e)
 
### Building RESTful API's Using Express
[SECTION 4 | Building RESTful API's Using Express](https://globant.udemy.com/nodejs-master-class/)
  - Introduction
  - RESTful Services
  - Introducing Express
  - Building Your First Web Server
  - Nodemon
  - Environment Variables
  - Route Parameters
  - Handling HTTP GET Requests
  - Handling HTTP POST Requests
  - Calling Endpoints Using Postman
  - Input Validation
  - Handling HTTP PUT Requests
  - Handling HTTP Delete Requests

[SECTION 5 | Express- Advanced Topics](https://globant.udemy.com/nodejs-master-class/)
  - Introducion
  - Middleware
  - Creating Custom Middleware
  - Built-In Middleware
  - Third-party Middleware
  - Environments
  - Configuration
  - Debugging
  - Templating Engines
  - Database Integration
  - Authentication
  - Structuring Express Applications
  - Project- Restructure the App

#### ~~Not so~~ optional reading
  - [The definitive guide to Express](https://hackernoon.com/the-definitive-guide-to-express-the-node-js-web-application-framework-649352e2ae87)
  - [Validations](https://medium.freecodecamp.org/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7)
  - [Validations with JOI](https://scotch.io/tutorials/node-api-schema-validation-with-joi)

### Asynchronous JavaScript

[SECTION 6 | Asynchronous JavaScript](https://www.udemy.com/nodejs-master-class)
  - Synchronous Vs. Asynchronous Code
  - Patterns For Dealing With Asynchronous Code
  - Callbacks
  - Callback Hell
  - Named Functions to Rescue
  - Promises
  - Replacing Callbacks with Promises
  - Consuming Promises
  - Creating Settled Promises
  - Running Parallel Promises
  - Async and Await
  
  #### ~~Not so~~ optional reading
  - [Scope & Closures](https://hackernoon.com/javascript-variable-scope-closures-a-primer-ace00b362eae)
  - [Event Driven Architecture](https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d)
  - [Callbacks](https://medium.freecodecamp.org/javascript-callbacks-explained-using-minions-da272f4d9bcd)
  - [Promises](https://hackernoon.com/understanding-promises-in-javascript-13d99df067c1)
  - [Async/Await](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
 
### Sequelize
@Nico... link aquí

### JWT / TEST
[SECTION 10 | Authentication and Authorization](https://globant.udemy.com/nodejs-master-class/)
  - Introduction
  - Creating the User Model
  - Registering Users
  - Using Lodash
  - Hashing Passwords
  - Authenticating Users
  - Testing the Authentication
  - JSON Web Tokens
  - Generating Authentication Tokens
  - Storing Secrets in Environment Variables
  - Setting Response Headers
  - Encapsulating Logic in Mongoose Models
  - Athorization Middleware
  - Protecting Routes
  - Getting the Current User
  - Logging Out Users
  - Role Based Authorization
  - Testing the Authorization

[SECTION 11 | Handling and Logging Errors](https://globant.udemy.com/nodejs-master-class/)
  - Introduction
  - Handling Rejected Promises
  - Express Error Middleware
  - Removing Try_Catch docs
  - Express Async Errors
  - Logging Errors
  - Uncaught Exceptions
  - Unhandled Promise Rejections
  - Error Handling Recap
  - Refactoring Index.js- Extracting Routes
  - Logging
  - Extracting the Config Logic
  - Extracting the Validation Logic
  - Showing Unhandled Exceptions on the Console
  
[SECTION 12 | Unit Testing](https://globant.udemy.com/nodejs-master-class/)
  - What is Automated Testing?
  - Benefits of Automated Testing
  - Types of Tests
  - Test Pyramid
  - Tooling
  - Writing Your First Unit Test
  - Testing Numbers
  - Grouping Tests
  - Refactoring with Confidence
  - Testing Strings
  - Testing Arrays
  - Testing Objects
  - Testing Exceptions
  - Continually Running Tests
  - Exercise- Testing the FizzBuzz
  - Creating Simple Mock Functions
  - Interaction Testing
  - Jest Mock Functions
  - What to Unit Test

#### ~~Not so~~ optional reading
  - [Testing in Node](https://hackernoon.com/a-crash-course-on-testing-with-node-js-6c7428d3da02)
  - [Mocks vs Stubs vs Shims](https://hackernoon.com/mocks-stubs-or-shims-f22164422020)
  - [How to mock in Node](https://itnext.io/how-to-mock-dependency-in-a-node-js-and-why-2ad4386f6587)
  - [Sinon vs Rewire](https://joost.vunderink.net/blog/2016/03/27/sinon-vs-rewire-when-do-i-use-which/)
  - [Code Coverage](https://medium.com/walkme-engineering/measure-your-nodejs-code-coverage-using-istanbul-82b129c81ae9)
  
### PLUS 
This section is a plus. We hope you have time to do it. :)

[DOCKER | Docker Mastery for Node.js Projects From a Docker Captain](https://globant.udemy.com/docker-mastery-for-nodejs/)
[ADVANCE NODEJS | Node JS: Advanced Concepts](https://globant.udemy.com/advanced-node-for-developers)

#### ~~Not so~~ optional reading
  - [Bluebird vs ES6 Promises](https://medium.com/@housecor/5-reasons-to-keep-using-bluebird-for-promises-a4f59c8a5d69)
  - [Node uses a single thread?](https://codeburst.io/how-node-js-single-thread-mechanism-work-understanding-event-loop-in-nodejs-230f7440b0ea)
  - [Clustering](https://medium.com/tech-tajawal/clustering-in-nodejs-utilizing-multiple-processor-cores-75d78aeb0f4f)
  - [Threads](https://medium.com/tech-tajawal/threading-in-nodejs-5d966a3b9858)
  - [Socket IO](https://socket.io/)
  - [No SQL Databases](https://www.mongodb.com/nosql-explained)
  - [Caching](https://medium.com/@danielsternlicht/caching-like-a-boss-in-nodejs-9bccbbc71b9b)

Hey, If you need a place to kill time try [Medium](https://medium.com), there's a lot to read about pretty much anything (specially development related topics).

  
