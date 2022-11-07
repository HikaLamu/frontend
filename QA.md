Hika Interviewing Rob (11/7/2022)
1. What we mean by Method Overriding?
Response:
Method Overriding is runtime polymorphism. You override in subclass using the same method signature of the super class. When I said it is runtime polymorphism it gives a different behavior to a subclass.
Corrections:
Method overriding happens if the sub-class method satisfies these conditions with the Super-class method: method name should be the same, the argument should be the same, return type should also be the same. The key benefit of overriding is that the Sub-class can provide some specific information about that sub-class type than the super-class. 
2. Explain the difference between Array and Array List.
Response:
Array list is dynamic, you can add or elements to array list or remove from them. Array list inherits from list interface. It has methods like .add(). While array is not dynamic, so number of elements in an array is set when it's declared.
Corrections:
To put elements in array we need to use index while that is not required in array list. Array makes use of primitive variables while array list uses generics. We use assignment operator (=) to add an element to array but we use add() method to add elements to array list. Array could be multi-dimensional while array is single dimensional. 
3. Explain the difference between HashMap and HashTable.
Response:
HashTable thread safe and HashMap is not thread safe. HashTable has key value pairs. HashMap inherit from the Map Interface. 
Corrections:
Because HashTable and HashMap inherit from Map interface they both have key value pairs. HashMap allows one null key and multiple null values while HashTable doesn't allow anything that is null. 
4. Explain about Collections hierarchy?
Response:
Collection hierarchy contains things like list, set, vector, array list. List inherit from collections interface.
Array list inherit from List. It does not include map. Map hierarchy is separate from collection hierarchy. 
Stack inherits from vector. Queue inherits from collections. Some types collections are sequential and some are not sequential. Deque inherits from Queue.
Correction: 
Collection > List, Queue, Set
List > ArrayList, Vector, LinkedList
Queue > LinkedList, PriorityQueue
Set > HashSet, LinkedHashSet, Sortedset
SortedSet > TreeSet
5. What are the different ways to handle exceptions?
You can use try catch block. In the try put some code that potentially throw an exception. Then in the catch block you deal with that exception. You could put throws in a method signature and some kind exception and you could deal with that when you are calling the method. 
Corrections:
When risky code is written that has the possibility of throwing an exception, it can be dealt with in one of two ways: Handling means that the risky code is placed inside a try/catch block. Declaring means that the type of exception to be thrown is listed in the method signature with the throws keyword. This is also called "ducking" the exception - you let the code which calls the method deal with it.
6. What is the difference between drop and truncate commands?
Drop and truncate are both DDL statements. Drop delete entire table and the data inside it. Truncate just delete the rows of the data in the table but keeps the structure of the table. 
Corrections:
DROP command removes a table and it cannot be rolled back from the database whereas TRUNCATE command removes all the rows from the table. 
7. What do we mean by normalization?
Normalization is standard of reducing redundancy in database. 
Corrections:
None
8. Explain the different types of normalization?
1NF (Normalized Form) every entry in table has unique primary key
2NF You don’t want data that could be generated using existing data. For example: If you had something like the weight of the base and the weight of the top you don't need the weight of the whole stuff because you can get that when adding the weight of the base and the weight of the top. 
3NF when you have second table that references to the first table you don’t want redundant entry in the second table. 
Corrections:
1NF: Each table cell should contain a single value. Each record needs to be unique.
2NF: Be in 1NF and Single Column Primary Key that does not functionally dependent on any subset of candidate key relation
3NF: Be in 2NF and No columns are transitive dependencies
9. What is a foreign key in SQL?
Response
A key that refers a primary of anther table. 
Corrections:
None
10. Write a SQL code that returns employees from employee table whose department is not accounting
Response:
select * from employees where department != 'accounting';
Corrections:
None


 