## How To Design Twitter
1) Think of the high level solutions
  - First divide the whole system into frontend and backend

  - In the backend we have to think about how we would model the data.
    (What types of database should we use? relational database like mySQL/PostgreSQL)

### Relational DB vs NonrelationalDB
Relational DB store data in tables and rows. They use Structured Query Language (SQL). Allows linking different
tables through the use of foreign keys. Great for complicated querying transactions.
ACID properties

1) Automicity - Each transaction is unique and make sure that if one part of logic fails
   then everything is rolled back.
2) Consistency -
3) Isolation -
4) Durability -

Nonrelational DB store data in collections of JSON documents. Great for scaling to large
databases.

## RandomID Generator
Purpose? Store each user in the database with a unique ID.
Restrictions -
1) They cannot be arbitrarily long
2) ID is incremented by date

In the simplest case, we have a self incrementing number in a single machine, so we
know that any number greater than another was created at a later date as well as larger.

In the best case, we have multiple servers that can generate a timestamp combined with the serverID
which will automatically be unique.
