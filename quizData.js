const quizData = [
    {
        "question": "What is the purpose of 'lateinit' in Kotlin?",
        "options": ["To initialize a property later", "To declare a property without initializing it", "To declare a variable that cannot be changed", "To declare a nullable property"],
        "correctOption": 1,
        "category": "Kotlin",
        "difficulty": "easy"
      },
      {
        "question": "What is a primary constructor in Kotlin?",
        "options": ["A constructor used to create instances of a class", "A constructor defined inside a class body", "A constructor with default parameters", "The main constructor used to initialize class properties"],
        "correctOption": 4,
        "category": "Kotlin",
        "difficulty": "medium"
      },
      {
        "question": "What does the 'init' block do in Kotlin?",
        "options": ["It is used to initialize properties of a class.", "It is used to define a secondary constructor.", "It is used to define extension functions.", "It is used to define global variables."],
        "correctOption": 1,
        "category": "Kotlin",
        "difficulty": "easy"
      },
      {
        "question": "What is the purpose of 'data class' in Kotlin?",
        "options": ["To define a class that holds only data", "To define a class that cannot be instantiated", "To define a class with only static members", "To define a class with abstract properties"],
        "correctOption": 1,
        "category": "Kotlin",
        "difficulty": "medium"
      },
      {
        "question": "What is the syntax for defining a lambda expression in Kotlin?",
        "options": ["{ parameter -> body }", "(parameter) -> body", "[parameter] -> body", "<parameter> -> body"],
        "correctOption": 1,
        "category": "Kotlin",
        "difficulty": "medium"
      },
      {
        "question": "What is the purpose of 'run' function in Kotlin?",
        "options": ["To execute a block of code asynchronously", "To execute a block of code as a coroutine", "To execute a block of code and return the result", "To execute a block of code and ignore the result"],
        "correctOption": 3,
        "category": "Kotlin",
        "difficulty": "medium"
      },
      {
        "question": "What is the purpose of 'apply' function in Kotlin?",
        "options": ["To execute a block of code asynchronously", "To execute a block of code as a coroutine", "To apply a function to each element of a collection", "To apply a block of code to an object and return the object"],
        "correctOption": 4,
        "category": "Kotlin",
        "difficulty": "medium"
      },
      {
        "question": "What does the 'also' function do in Kotlin?",
        "options": ["It is used to apply a function to each element of a collection", "It is used to execute a block of code and return the result", "It is used to apply a block of code to an object and return the object", "It is used to execute a block of code and ignore the result"],
        "correctOption": 3,
        "category": "Kotlin",
        "difficulty": "medium"
      },
      {
        "question": "Which keyword is used to declare a constant in Kotlin?",
        "options": ["val", "var", "const", "let"],
        "correctOption": 1,
        "category": "Kotlin",
        "difficulty": "easy"
      },
      {
        "question": "What is the purpose of 'with' function in Kotlin?",
        "options": ["To execute a block of code asynchronously", "To execute a block of code as a coroutine", "To execute a block of code and return the result", "To apply a block of code to an object without explicitly referencing the object"],
        "correctOption": 4,
        "category": "Kotlin",
        "difficulty": "medium"
      },
  {
      "question": "What is React?",
      "options": ["A JavaScript library for building user interfaces", "A programming language", "An IDE for web development", "A CSS framework"],
      "correctOption": 1,
      "category": "React",
      "difficulty": "easy"
  },
  {
      "question": "What is JSX in React?",
      "options": ["A syntax extension for JavaScript", "A JavaScript library", "A way to style React components", "A built-in React component"],
      "correctOption": 1,
      "category": "React",
      "difficulty": "medium"
  },{
    "question": "What is the purpose of 'useState' hook in React?",
    "options": ["To manage state in functional components", "To handle user input in forms", "To make HTTP requests to a server", "To define routes in a React application"],
    "correctOption": 1,
    "category": "React",
    "difficulty": "easy"
  },
  {
    "question": "What is a functional component in React?",
    "options": ["A component defined using class syntax", "A component that accepts props", "A component that contains lifecycle methods", "A component defined as a JavaScript function"],
    "correctOption": 4,
    "category": "React",
    "difficulty": "medium"
  },
  {
    "question": "What does the 'useEffect' hook do in React?",
    "options": ["It is used to manage state in functional components", "It is used to handle user input in forms", "It is used to make HTTP requests to a server", "It is used to perform side effects in functional components"],
    "correctOption": 4,
    "category": "React",
    "difficulty": "medium"
  },
  {
    "question": "What is JSX in React?",
    "options": ["A syntax extension for JavaScript", "A tool for code splitting in React", "A state management library", "A routing library for React applications"],
    "correctOption": 1,
    "category": "React",
    "difficulty": "easy"
  },
  {
    "question": "What is the purpose of 'useReducer' hook in React?",
    "options": ["To manage state in functional components", "To handle user input in forms", "To perform complex state transitions", "To define routes in a React application"],
    "correctOption": 3,
    "category": "React",
    "difficulty": "medium"
  },
  {
    "question": "What is a higher-order component (HOC) in React?",
    "options": ["A component that renders other components", "A function that takes a component and returns a new component", "A component that uses the Context API", "A component that contains lifecycle methods"],
    "correctOption": 2,
    "category": "React",
    "difficulty": "hard"
  },
  {
    "question": "What does the 'useContext' hook do in React?",
    "options": ["It is used to manage state in functional components", "It is used to access context values in functional components", "It is used to handle user input in forms", "It is used to define routes in a React application"],
    "correctOption": 2,
    "category": "React",
    "difficulty": "easy"
  },
  {
    "question": "What is the purpose of 'useMemo' hook in React?",
    "options": ["To manage state in functional components", "To handle user input in forms", "To memoize expensive calculations", "To define routes in a React application"],
    "correctOption": 3,
    "category": "React",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'forwardRef' in React?",
    "options": ["To forward props to child components", "To forward references to child components", "To create higher-order components", "To define routes in a React application"],
    "correctOption": 2,
    "category": "React",
    "difficulty": "easy"
  },
  {
    "question": "What does the 'useCallback' hook do in React?",
    "options": ["It is used to manage state in functional components", "It is used to handle user input in forms", "It is used to memoize callback functions", "It is used to define routes in a React application"],
    "correctOption": 3,
    "category": "React",
    "difficulty": "medium"
  },
  {
      "question": "What is Java?",
      "options": ["A scripting language", "A markup language", "A programming language", "An operating system"],
      "correctOption": 3,
      "category": "Java",
      "difficulty": "easy"
  },
  {
      "question": "What is the main feature of Java?",
      "options": ["Platform independence", "Strongly-typed language", "Dynamic typing", "Single inheritance"],
      "correctOption": 1,
      "category": "Java",
      "difficulty": "medium"
  },
  {
    "question": "What is the difference between '==' and '.equals()' in Java?",
    "options": ["'==' compares memory addresses, while '.equals()' compares object contents", "'==' compares object contents, while '.equals()' compares memory addresses", "'==' is used for primitive data types, while '.equals()' is used for objects", "'==' is used for objects, while '.equals()' is used for primitive data types"],
    "correctOption": 1,
    "category": "Java",
    "difficulty": "medium"
},
{
    "question": "What is an abstract class in Java?",
    "options": ["A class that cannot be instantiated", "A class that contains only abstract methods", "A class that can be used to create objects", "A class that cannot contain any methods"],
    "correctOption": 2,
    "category": "Java",
    "difficulty": "easy"
},
{
    "question": "What is the purpose of 'static' keyword in Java?",
    "options": ["To define a class member that belongs to the class itself", "To declare a variable that cannot be changed", "To define a method that can be called without creating an instance of the class", "To define a class that cannot be inherited"],
    "correctOption": 1,
    "category": "Java",
    "difficulty": "easy"
  },
  {
    "question": "What is the purpose of 'final' keyword in Java?",
    "options": ["To define a class member that belongs to the class itself", "To declare a variable that cannot be changed", "To define a method that can be called without creating an instance of the class", "To define a class that cannot be inherited"],
    "correctOption": 2,
    "category": "Java",
    "difficulty": "easy"
  },
  {
    "question": "What is inheritance in Java?",
    "options": ["A mechanism where a subclass inherits properties and behaviors from a superclass", "A mechanism to create multiple instances of a class", "A mechanism to define methods with the same name but different parameters", "A mechanism to prevent a class from being inherited"],
    "correctOption": 1,
    "category": "Java",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'interface' in Java?",
    "options": ["To define a blueprint for classes that implement it", "To declare a variable that cannot be changed", "To define a method that can be called without creating an instance of the class", "To define a class that cannot be inherited"],
    "correctOption": 1,
    "category": "Java",
    "difficulty": "easy"
  },
  {
    "question": "What is method overriding in Java?",
    "options": ["A mechanism to create multiple instances of a class", "A mechanism to define methods with the same name but different parameters", "A mechanism where a subclass provides a specific implementation of a method that is already provided by its superclass", "A mechanism to prevent a class from being inherited"],
    "correctOption": 3,
    "category": "Java",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'this' keyword in Java?",
    "options": ["To refer to the current instance of a class", "To declare a variable that cannot be changed", "To define a method that can be called without creating an instance of the class", "To define a class that cannot be inherited"],
    "correctOption": 1,
    "category": "Java",
    "difficulty": "easy"
  },
  {
    "question": "What is polymorphism in Java?",
    "options": ["A mechanism to create multiple instances of a class", "A mechanism to define methods with the same name but different parameters", "A mechanism where a subclass provides a specific implementation of a method that is already provided by its superclass", "A mechanism where an object can take multiple forms"],
    "correctOption": 4,
    "category": "Java",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'super' keyword in Java?",
    "options": ["To refer to the current instance of a class", "To call a method of the superclass", "To define a method that can be called without creating an instance of the class", "To define a class that cannot be inherited"],
    "correctOption": 2,
    "category": "Java",
    "difficulty": "easy"
  },
  {
    "question": "What is encapsulation in Java?",
    "options": ["A mechanism where an object can take multiple forms", "A mechanism to create multiple instances of a class", "A mechanism to hide the internal state of an object and only expose the necessary functionality", "A mechanism to prevent a class from being inherited"],
    "correctOption": 3,
    "category": "Java",
    "difficulty": "medium"
  },
{
    "question": "What is a constructor in Java?",
    "options": ["A special method used to initialize objects", "A method used to destroy objects", "A method used to define objects", "A method used to update objects"],
    "correctOption": 1,
    "category": "Java",
    "difficulty": "easy"
},
  // Add more Java questions here...

  // Python
  {
      "question": "What is Python?",
      "options": ["A snake", "A programming language", "A type of pasta", "A country"],
      "correctOption": 2,
      "category": "Python",
      "difficulty": "easy"
  },
  {
      "question": "What is Python's main advantage?",
      "options": ["Speed", "Portability", "Readability", "Scalability"],
      "correctOption": 3,
      "category": "Python",
      "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'pip' in Python?",
    "options": ["To install Python packages", "To run Python scripts", "To compile Python code", "To debug Python code"],
    "correctOption": 1,
    "category": "Python",
    "difficulty": "easy"
},
{
    "question": "What is a lambda function in Python?",
    "options": ["An anonymous function defined using the keyword 'lambda'", "A function with multiple return statements", "A function that can be called without any arguments", "A function that accepts any number of arguments"],
    "correctOption": 1,
    "category": "Python",
    "difficulty": "medium"
},
{
    "question": "What is the purpose of 'self' in Python?",
    "options": ["To refer to the current instance of the class", "To refer to the parent class", "To refer to the child class", "To refer to the global scope"],
    "correctOption": 1,
    "category": "Python",
    "difficulty": "easy"
},
{
    "question": "What is a decorator in Python?",
    "options": ["A function that modifies the behavior of another function", "A function that adds properties to an object", "A function that removes properties from an object", "A function that converts an object to a string"],
    "correctOption": 1,
    "category": "Python",
    "difficulty": "medium"
},
{
    "question": "What is the purpose of '__init__' method in Python?",
    "options": ["To initialize object properties", "To destroy object properties", "To update object properties", "To define object properties"],
    "correctOption": 1,
    "category": "Python",
    "difficulty": "easy"
},{
  "question": "What is Python's built-in testing framework?",
  "options": ["pytest", "unittest", "nose", "doctest"],
  "correctOption": 1,
  "category": "Python",
  "difficulty": "medium"
},
{
  "question": "What is the purpose of the 'with' statement in Python?",
  "options": ["To define a context manager", "To declare a variable", "To import a module", "To create a class"],
  "correctOption": 1,
  "category": "Python",
  "difficulty": "medium"
},
{
  "question": "Which of the following is a built-in data type in Python?",
  "options": ["Tree", "Tuple", "Set", "List"],
  "correctOption": 4,
  "category": "Python",
  "difficulty": "easy"
},
{
  "question": "What is the output of the following code? \nprint(3 * 'abc')",
  "options": ["abcabcabc", "9", "SyntaxError", "TypeError"],
  "correctOption": 1,
  "category": "Python",
  "difficulty": "easy"
},
{
  "question": "What does the 'import this' statement do in Python?",
  "options": ["Imports a specific module", "Displays the Zen of Python", "Imports all modules", "Imports built-in functions"],
  "correctOption": 2,
  "category": "Python",
  "difficulty": "easy"
},
{
  "question": "Which method is used to remove the last element from a list in Python?",
  "options": ["pop()", "remove()", "delete()", "clear()"],
  "correctOption": 1,
  "category": "Python",
  "difficulty": "easy"
},
{
  "question": "What is the purpose of the 'break' statement in Python?",
  "options": ["To skip the rest of the code in a loop", "To exit the entire loop", "To continue to the next iteration of the loop", "To raise an exception"],
  "correctOption": 2,
  "category": "Python",
  "difficulty": "easy"
},
{
  "question": "What is the default encoding used by Python for Unicode strings?",
  "options": ["UTF-8", "ASCII", "UTF-16", "ISO-8859-1"],
  "correctOption": 1,
  "category": "Python",
  "difficulty": "medium"
},
{
  "question": "Which module in Python provides support for regular expressions?",
  "options": ["re", "regex", "regexp", "reg"],
  "correctOption": 1,
  "category": "Python",
  "difficulty": "medium"
},
{
  "question": "What is the purpose of the 'finally' block in Python?",
  "options": ["To handle exceptions", "To define cleanup actions", "To execute code only if no exception occurs", "To define global variables"],
  "correctOption": 2,
  "category": "Python",
  "difficulty": "medium"
},
  // Add more Python questions here...

  // C Pgm
  {
    "question": "What is the purpose of 'printf' function in C?",
    "options": ["To read input from the user", "To print output to the console", "To allocate memory dynamically", "To declare a variable"],
    "correctOption": 2,
    "category": "C",
    "difficulty": "easy"
  },
  {
    "question": "What is a pointer in C?",
    "options": ["A variable that holds the memory address of another variable", "A variable that cannot be changed", "A special type of variable used for arithmetic operations", "A variable that can hold multiple values"],
    "correctOption": 1,
    "category": "C",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'malloc' function in C?",
    "options": ["To read input from the user", "To print output to the console", "To allocate memory dynamically", "To declare a variable"],
    "correctOption": 3,
    "category": "C",
    "difficulty": "easy"
  },
  {
    "question": "What is an array in C?",
    "options": ["A collection of variables of different data types", "A collection of variables that are all of the same data type", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "C",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'scanf' function in C?",
    "options": ["To allocate memory dynamically", "To read input from the user", "To print output to the console", "To declare a variable"],
    "correctOption": 2,
    "category": "C",
    "difficulty": "easy"
  },
  {
    "question": "What is a structure in C?",
    "options": ["A collection of variables that are all of the same data type", "A collection of variables of different data types", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "C",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'free' function in C?",
    "options": ["To read input from the user", "To print output to the console", "To deallocate dynamically allocated memory", "To declare a variable"],
    "correctOption": 3,
    "category": "C",
    "difficulty": "easy"
  },
  {
    "question": "What is a function in C?",
    "options": ["A collection of variables that are all of the same data type", "A collection of variables of different data types", "A block of code that performs a specific task", "A variable that holds the memory address of another variable"],
    "correctOption": 3,
    "category": "C",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'return' statement in C?",
    "options": ["To allocate memory dynamically", "To read input from the user", "To exit a function and return a value", "To declare a variable"],
    "correctOption": 3,
    "category": "C",
    "difficulty": "easy"
  },
  {
    "question": "What is a pointer arithmetic in C?",
    "options": ["A way to perform arithmetic operations on variables of different data types", "A way to perform arithmetic operations on variables of the same data type", "A way to perform arithmetic operations using pointers", "A way to perform arithmetic operations without using variables"],
    "correctOption": 3,
    "category": "C",
    "difficulty": "medium"
  },
  // Add more C Pgm questions here...

  // R pgm
  {
    "question": "What is the purpose of 'print' function in R?",
    "options": ["To read input from the user", "To print output to the console", "To allocate memory dynamically", "To declare a variable"],
    "correctOption": 2,
    "category": "R",
    "difficulty": "easy"
  },
  {
    "question": "What is a vector in R?",
    "options": ["A collection of variables of different data types", "A collection of variables that are all of the same data type", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "R",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'read.csv' function in R?",
    "options": ["To read input from the user", "To print output to the console", "To read data from a CSV file into a data frame", "To declare a variable"],
    "correctOption": 3,
    "category": "R",
    "difficulty": "easy"
  },
  {
    "question": "What is a data frame in R?",
    "options": ["A collection of variables of different data types", "A collection of variables that are all of the same data type", "A special type of variable used for arithmetic operations", "A two-dimensional array-like structure with rows and columns"],
    "correctOption": 4,
    "category": "R",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'install.packages' function in R?",
    "options": ["To read input from the user", "To print output to the console", "To install R packages from CRAN", "To declare a variable"],
    "correctOption": 3,
    "category": "R",
    "difficulty": "easy"
  },
  {
    "question": "What is a list in R?",
    "options": ["A collection of variables of different data types", "A collection of variables that are all of the same data type", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 1,
    "category": "R",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'mean' function in R?",
    "options": ["To calculate the mean of a numeric vector", "To calculate the standard deviation of a numeric vector", "To calculate the median of a numeric vector", "To calculate the variance of a numeric vector"],
    "correctOption": 1,
    "category": "R",
    "difficulty": "easy"
  },
  {
    "question": "What is a factor in R?",
    "options": ["A special type of variable used for categorical data", "A special type of variable used for arithmetic operations", "A collection of variables of different data types", "A variable that holds the memory address of another variable"],
    "correctOption": 1,
    "category": "R",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'plot' function in R?",
    "options": ["To read input from the user", "To print output to the console", "To create plots and graphs", "To declare a variable"],
    "correctOption": 3,
    "category": "R",
    "difficulty": "easy"
  },
  {
    "question": "What is a matrix in R?",
    "options": ["A collection of variables of different data types", "A two-dimensional array-like structure with rows and columns", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "R",
    "difficulty": "medium"
  },
  // Add more R pgm questions here...

  // Go Lang
  {
    "question": "What is the purpose of 'fmt.Println' function in Go?",
    "options": ["To read input from the user", "To print output to the console", "To allocate memory dynamically", "To declare a variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "easy"
  },
  {
    "question": "What is a slice in Go?",
    "options": ["A collection of variables of different data types", "A dynamically-sized, flexible view into the elements of an array", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'make' function in Go?",
    "options": ["To read input from the user", "To print output to the console", "To allocate memory dynamically", "To declare a variable"],
    "correctOption": 3,
    "category": "GoLang",
    "difficulty": "easy"
  },
  {
    "question": "What is a goroutine in Go?",
    "options": ["A collection of variables of different data types", "A lightweight thread managed by the Go runtime", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'defer' statement in Go?",
    "options": ["To read input from the user", "To print output to the console", "To execute a function call just before the function returns", "To declare a variable"],
    "correctOption": 3,
    "category": "GoLang",
    "difficulty": "easy"
  },
  {
    "question": "What is a channel in Go?",
    "options": ["A collection of variables of different data types", "A way to communicate between goroutines", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'append' function in Go?",
    "options": ["To read input from the user", "To add elements to a slice", "To allocate memory dynamically", "To declare a variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "easy"
  },
  {
    "question": "What is a map in Go?",
    "options": ["A collection of variables of different data types", "A built-in type for key-value pairs", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "medium"
  },
  {
    "question": "What is the purpose of 'range' keyword in Go?",
    "options": ["To read input from the user", "To print output to the console", "To iterate over elements of an array, slice, string, map, or channel", "To declare a variable"],
    "correctOption": 3,
    "category": "GoLang",
    "difficulty": "easy"
  },
  {
    "question": "What is a struct in Go?",
    "options": ["A collection of variables of different data types", "A user-defined type that contains named fields", "A special type of variable used for arithmetic operations", "A variable that holds the memory address of another variable"],
    "correctOption": 2,
    "category": "GoLang",
    "difficulty": "medium"
  },
  // Add more Go Lang questions here...

  // DSA
  {
    "question": "What is the time complexity of inserting an element at the end of an array in the worst case?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correctOption": 1,
    "category": "DSA",
    "difficulty": "easy"
  },
  {
    "question": "What is a stack in data structures?",
    "options": ["A linear data structure with a First-In-First-Out (FIFO) order", "A linear data structure with a Last-In-First-Out (LIFO) order", "A hierarchical data structure", "A data structure that stores elements in sorted order"],
    "correctOption": 2,
    "category": "DSA",
    "difficulty": "medium"
  },
  {
    "question": "What is the time complexity of finding an element in a sorted array using binary search?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correctOption": 2,
    "category": "DSA",
    "difficulty": "easy"
  },
  {
    "question": "What is a queue in data structures?",
    "options": ["A linear data structure with a First-In-First-Out (FIFO) order", "A linear data structure with a Last-In-First-Out (LIFO) order", "A hierarchical data structure", "A data structure that stores elements in sorted order"],
    "correctOption": 1,
    "category": "DSA",
    "difficulty": "medium"
  },
  {
    "question": "What is the time complexity of appending an element to the end of a linked list?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correctOption": 1,
    "category": "DSA",
    "difficulty": "easy"
  },
  {
    "question": "What is a binary tree in data structures?",
    "options": ["A tree data structure where each node has at most two children", "A tree data structure where each node has exactly two children", "A tree data structure where each node has at most three children", "A tree data structure where each node has exactly three children"],
    "correctOption": 1,
    "category": "DSA",
    "difficulty": "medium"
  },
  {
    "question": "What is the time complexity of searching for an element in a binary search tree (BST) in the worst case?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correctOption": 2,
    "category": "DSA",
    "difficulty": "easy"
  },
  {
    "question": "What is a linked list in data structures?",
    "options": ["A linear data structure with a First-In-First-Out (FIFO) order", "A linear data structure with a Last-In-First-Out (LIFO) order", "A hierarchical data structure", "A data structure that stores elements in sorted order"],
    "correctOption": 3,
    "category": "DSA",
    "difficulty": "medium"
  },
  {
    "question": "What is the time complexity of removing the last element from a stack implemented using an array?",
    "options": ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    "correctOption": 1,
    "category": "DSA",
    "difficulty": "easy"
  },
  {
    "question": "What is a priority queue in data structures?",
    "options": ["A queue where elements are removed based on their insertion order", "A queue where elements are removed based on their priority", "A queue where elements are removed in a Last-In-First-Out (LIFO) order", "A queue where elements are removed in a First-In-First-Out (FIFO) order"],
    "correctOption": 2,
    "category": "DSA",
    "difficulty": "medium"
  },
  // Add more DSA questions here...
];

export default quizData;