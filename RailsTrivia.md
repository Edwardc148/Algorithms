# Rails Trivia
## Rails Asset Pipeline
1) Concatenate (concats js and css files into one to make less requests)
2) Minify (makes files smaller by removing comments and white space, and making var shorter)
3) Preprocess (variables would be pre filled with values)
Follows the tree in asset pipeline
Application.js => add jQuery and minifies and preprocesses.


## Rails Project
REMEMBER:
Don't Repeat Yourself
Convention Over Configuration

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

### Views
Purpose is to display information in a human readable format.

### CSRF
Cross-Site Request Forgery - An attack that forces an end user to execute an
unwanted action on a web application that they are currently authenticated. Rails
generates authenticity token and validates that token on every submission. There
is a unique token that is embedded into the site's HTML as well as the session cookie,
and on every request, that token is sent as well. Rails has to compare that the session
cookie token matches the site's HTML token.
