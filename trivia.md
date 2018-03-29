### What is REST
REST stands for Representational State Transfer.  A architectural design principle to make
network communications scalable and flexible. In short, it is any design
that has follows the Fielding constraints.

1) Client-Server: When you browse the internet, your computer (client) sends
HTTP requests to a server. It is a one-to-one communication.

2) Stateless: It means that the server does not keep track of past requests.  
Each request is treated as standalone.

3) Uniform Interface
   a) A GET request to URI and if it is a 200 level response and HTML is provided
   then it is rendered onto the page.
   b) The server receives a representation of what the new resource should look
   like.
   c) Resources are manipulated through CRUD operations (create, read, update,  
   and delete)

### Active Record

Exists within the MVC framework of Rails. It is the *model* of the MVC framework. Follows the convention over configuration.

### What is ORM

Object Relational Mapping is a technique to connect the objects in an application with the tables in a relational database. In Rails, Active Record is the ORM.

### What is an API

Application Programming Interface:
1) A part of the server that receives requests and sends responses.
2) When you type in facebook.com, you send a request to the facebook server where the request interacts with the facebook API.
3) GET request to '/cats' to a remote server and returns a list of all cats.

### SQL and NoSQL

SQL: Structured Query Language:

NoSQL: non Structured Query Language:

### What exists in the HTTP request and response
Request:
1) Method: (GET, POST, PATCH, PUT, DELETE)
2) Path: ('/users/1')
3) Query: '?loc=SF&...'
4) Body: additional data

Response:
1) Status: '200 OK'
2) Body

### What is the JavaScript Event Loop?

JavaScript is based on a Stack and a Queue.

### What is a JavaScript Promise?

### What is event delegation?

### What is an anti-pattern of CSS?

### What is a programming paradigm?

## Redux

### Action
An object that tells the reducer how to change its data.
### Reducer
A function that returns some data. A pure function where the return value is
determined by its input values without observable side effects. Given the same
input, it will always produce the same output.
### Store
An object that holds the application's data
### State
Data for our application to use

## System Design

### Design TinyURL (URL shortening service)

#### Given a (typically) long URL, how would how would you design service that would generate a shorter and unique alias for it.

Important Questions to Ask:
1) How do I generate an Unique ID for each URL?
2) How to scale that to thousands of URLs?

## Rails Project

### Setup
Commands:
1) rails new 'project-name' -d postgresql // create the project
2) bundle exec rails db:create // create the database
3) gem 'better_errors', 'binding_of_caller', 'pry-rails' // add debugging gems

### Flow
When we send a HTTP request, the first thing it does is hit the rails router.
It considers the path and method that is included in the HTTP request to determine
where to send it off to.  What combination of paths and methods are associated with
which controllers and which actions of those controllers.

### Routes
Check route and if the route matches, then it will initialize a new controller.
The controller will then call the right action.

Rails Routing:
When the browser makes a request, it first hits the rails router which determines
which controller will process the request and what action (method) it will call
on the controller. The controller will then go through the model to get some
information from the database. It will then take that and either directly give
back some information if it is just an API request (JSON) or it will go to the
views and dynamically change.

In routes.rb, it uses a DSL => Domain Specific Language to create the routes.

Multiple ways to create the routes:
get 'superheroes', to: 'superheroes#index'
delete 'superheroes/:id', to: 'superheroes#destroy'
The '/:id' is a wild card and will match anything after the path.

### Models

Migrations is a file that describes changes to a database.  It can create or drop tables,
as well as adding or removing a column.

Why use add_index => creates an ordered list which is a binary tree which gives the database
a faster way to search for certain values in that column.

A User Table:
1) username: string
2) password_digest: string
3) add_index (:table, :column, :constraints)

### Controllers
Responsible for one resource. The controller will fill out the HTTP response.
