### What is a feature of Object Oriented Programming
1) Data Encapsulation
2) Data Abstraction
3) Polymorphism
4) Inheritance

### Class
A class is a blueprint for which objects are created.  When a new class is created
a new object of type Class is created and assigned a global constant.

### What is a Ruby Object
Object is the default root of everything in Ruby.  There is a saying in Ruby that everything
is an object. Objects are instances of the class.

### Difference Between Class and Modules
A Module is more of like a library providing methods that are accessible to
multiple classes.  
A Class is to create an object.
Classes can be instantiated, but modules cannot.

### Initialize Method
Similar to constructor in JavaScript. What happens when we create an instance of
the class.

### What are the three levels of method access control.
1) Public - methods can be called by anyone.
2) Protected - similar to private except it is accessible between its children.
3) Private - methods are for internal usage within the defining class

### What does self mean?
Self gives you access to the current object. The object that is receiving the current message.

### What is singleton methods
Methods that live inside the singleton class and are only available for a single object. An Eigenclass
is another name for Singleton Class. The singleton pattern states that you can only have
one instance of it.

### Ruby Lookup path
1) Methods from the object's singleton class.
2) Methods from modules attached to singleton class.
3) Methods defined in the class.
4) Methods from included modules.
5) Class Hierarchy.

### Callbacks
They are methods that get called at certain moments of an objects life cycle.
Ex: after_initialize, before_validation

### Difference Between Proc and Lambda
They are both part of Ruby's Proc class. Blocks
Two major differences:
1) Proc does not check for number of arguments, but lambdas do.
2) Returns are different in lambdas. Lambda returns from the lambda, but Procs return
from the calling method.

### Rack
It is a middleware that stands between web servers and web applications. It is used to
communicate between the different available web servers as well application frameworks.

### Ruby Gems
It is a package manager (helps automate the installation/upgrading/configuring) of softwares
used in Ruby that provides a standard format for distributing Ruby programs and libraries.
Each gem consists of a: name, version, and platform.
Also contain: code, documentation, gemspec (purpose of gem)
