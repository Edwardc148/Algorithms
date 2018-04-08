## Phone Screens

- What is the difference between smart and dumb components (React)?

- What is the advantage of using something like Redux in a React app?

- When I open my browser and type in www.google.com, what happens? (browser cache, dns, ip address, get request, possible browser cache again or cdn, route, handler/controller, response, render)

- If my site takes a long time to load, what are some steps I might take to improve the load time?

- What are the different types of joins?

- If I am constantly doing joins between two very large tables, and it is taking a long time, what are some steps I might take to speed things up?

- What are some more general steps I can take if my database is too slow? (Vertical scaling, caching, sharding, replication, denormalization, etc).

- Walk me through how you would implement user authentication (salting, hashing, rainbow tables, cookies/sessionTokens, ssl, csrf, etc).

- What is async/the event loop?

- How does git keep track of different versions?

- What is a decorator?

- How does a hashmap work?

- What's an n+1 query and how might I avoid it?

- 2 cloud instances are running a program. One of them is in Los Angeles and is working fine. The other is in Germany and is not working. They are both running the exact same code on the exact same OS with the exact same setup. How would you go about debugging this? (no "correct" answer, time zones and possible geographical restrictions on 3rd party apis come to mind).

## Technical Challenges / Onsite Whiteboarding

- Write a method that accepts a folder, goes through all of the folders contents, and deletes all empty folders - including the folders made empty by an earlier deletion.

- Given a hashmap where 1 => a, 2 => b, 26 => z (etc), write a method which accepts a string of numbers (i.e. "112") and outputs an array of all possible interpretations of that string (["aab", "ak", "jb"]).

- Given a word and a matrix of letters representing a wordsearch, write a method which receives a word and determines if it is possible to find that word in the wordsearch.

- A few "I have a method that receives x, performs y, and outputs z. What are some potential fail points and what tests would you write for it?" type questions.

- Write a method that receives a list of words and returns whether it is possible to form a [word square](http://www.papg.com/images/word-square.gif).

- Write install order (really, very creative).

- Given two linked lists whose values are single digits of a number, add the two numbers.

- Using OOP, design the backend api for excel - include a method for accepting formulas and for updating a formulaic cell when a cell whose value it depends on has been updated.

- Using OOP, design the backend api for an elevator system. Elevators should be summonable via the floor up and down buttons and directable via the internal floor number buttons. Elevators should visit floors in an order which is fair but efficient.

- I've gotten a few sql query questions. They weren't very difficult, mainly trying to gauge my familiarity with the language.

- You are a roomba trying to clean a room. You have methods goForward, turnRight, and turnLeft. You can see nothing, but goForward will return false if you hit something. You are given a starting x, y coordinates. There are no guarantees about the shape of the room you are in or what your x, y coordinates mean in relation to the room or which direction you are facing. Assuming the roomba automatically cleans every square of the floor it sits above, efficiently clean the entire room.

- Given an array like [1, 2, -1, 0] where each index is an animal, and each value is the index of that animal's predator, write a method that splits the animals into separate buckets such that no animal is trapped in a bucket with an animal that preys upon it. Use as few buckets as possible. The food chain follows upwards so that in this example, the 0 index animal cannot be placed in a bucket with the 1 index animal because the 0 index animal is preyed on by the 1 index animal. It also cannot go in a bucket with the 2 index animal, b/c the 2 index animal eats the 1 index animal which eats the 0 index animal. -1 indicates that an animal is an apex predator. I know. I honestly spent more time trying to wrap my head around the confusing input format than solving it - it's essentially install order.

- Write binary search (bless their hearts).

- I'm looking for a string in a very large file. The file is so large in fact that it cannot be fully loaded into memory. Write a method that finds the line that string appears on. Now assume that I am going to be looking through this file frequently. How can I prepare for future searches so that they take less time?

- FizzBuzz!!!!!!!!

- A few, "what tool would you use for x" type questions. I don't remember any specifics. Just know when to use and when not to use scripting languages, when to use SQL vs noSQL, when to use a large framework vs when to implement your own or stick with a smaller toolset.

- Compress a string i.e. "rrdd" becomes "r2d2".

- I am ordering computer hardware. Before the hardware is shipped to us, the hardware is tested. How would you build a system to receive test results and store them such that the test results can be linked to the particular piece of hardware? How can I best organize this data so that I can spot trends across hardware parts to predict possible failures?

- A few variants on binary tree traversal.

- Using vanilla Javascript, write your own implementation of Promise.all

- [2 sum](https://leetcode.com/problems/two-sum/description/)

- [3 sum](https://leetcode.com/problems/3sum/description/)

- A couple "build me a crud app that hits x api and does y and z". These were done using a laptop and expected an actual working result.

- [Valid Parens](https://leetcode.com/problems/valid-parentheses/description/)

### That's all I can remember.
