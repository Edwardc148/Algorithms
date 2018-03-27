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
