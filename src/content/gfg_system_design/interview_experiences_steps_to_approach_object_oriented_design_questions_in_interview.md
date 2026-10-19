# Approach Object-Oriented Design Questions in Interview

Source: https://www.geeksforgeeks.org/interview-experiences/steps-to-approach-object-oriented-design-questions-in-interview/

Object-Oriented Design (OOD) is an important interview topic at companies like Google, Microsoft, Amazon, and Facebook. Candidates are asked to design a system using OOP principles by identifying objects, relationships, and creating a scalable structure. It evaluates both design thinking and understanding of core OOP concepts.
- Identify key entities and objects from the problem statement, then apply OOP concepts like encapsulation, inheritance, and polymorphism to model them effectively.
- Design clear class structures and relationships while focusing on clean, modular, and scalable system design.
Example: For a Library Management System, identify objects like Book, User, and Library, define their attributes and methods, and design how they interact (e.g., issue and return books).

## Preparation Before the Interviews
1. We should have a good command of one object-oriented programming language such as Java/C++/Python etc. Have some experience in it and learn how the OOPs concepts work in these languages.
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
- Association, Aggregation, Composition
- Class
- Object
- Method
2. Understand the various object-oriented design principles such as SOLID/DRY principles etc.
3. If you have a good command of various design patterns such as MVC, singleton, factory method, etc then it will be a bonus point for you as an entry-level developer or senior-level developer.

## Step-by-Step Process to Approach The Problem
Break the problem into smaller parts and systematically design each component to build a clear and structured solution.

### 1. Requirement Gathering
First, identify whether the interview is focused on system-level design or object-level design, as the approach differs for each. Begin by gathering requirements based on the high-level problem description given by the interviewer and clarify the exact scope by asking relevant questions. Ensure you clearly understand the expected features and output.
- Discuss and list the key features, then confirm them with the interviewer to ensure alignment.
- Define assumptions and clearly state the scope of the system, including high-level use cases to avoid ambiguity.
Example: an online shopping system.
- Customer can search/view/buy products
- A shopping cart for the customer to put all the items they want to buy.
- Customer should be able to pay through the credit cards/debit cards/net banking
- The customer should be able to mention the shipping address where his/her orders can be delivered.

### 2. Use Case Diagram
While discussing the requirement you must have identified all the use cases that you need to include in your design. List all the use cases your system is supposed to design. You will be able to identify the different components and actors you need to include in your system.
- Identify all the actors in the Use Case Diagram
- Identify the roles of different actors.
Now you need to transform that into the Use Case Diagram. Below is the use case for the online shopping system.
- Search product on the website
- View Product on website
- Add/Remove Product from the shopping cart
- Checkout
- Make Payment and specify a shipping address

### 3. Activity Diagram
Once you identified the actors and the role of each actor, focus on the logic, complete structure, and the overall flow of the system. Write down the flow diagram. This will help you to understand the problem clearly and you will have the chance to rectify your mistakes. Below is the activity diagram for the online shopping system.

### 4. Class Diagram
This is the most critical part of the interview process, where the interviewer evaluates your design thinking and problem-solving approach. By this stage, you already have the necessary components such as system actors and objects to start building your class diagram.
- Identify core objects: Nouns in the requirements usually represent potential objects or classes, while verbs often translate into methods or behaviors of those objects.
- Define relationships: Focus on how objects interact with each other by defining associations, inheritance, and dependencies clearly.
- Use abstractions wisely: Decide where to use abstract classes or interfaces to make your design flexible and extensible for future changes.
- Apply design patterns: Use patterns like Singleton, Factory, or Observer wherever applicable to improve scalability and maintainability.
- Create a class diagram: Draw a clean and structured diagram that includes objects, attributes, methods, and their relationships to clearly explain your design.
- Prepare for follow-up questions: Be ready to justify your design decisions, trade-offs, and how your system will scale with increasing users or future requirements.
- Defend your design: Design questions are open-ended, so focus on explaining your approach clearly rather than worrying about a “perfect” answer.
- Follow OOP principles: Ensure your design adheres to encapsulation, abstraction, inheritance, and polymorphism to build a robust and maintainable system.

### 5. Describe Top Use Cases
Use the class defined in the above step and run the top use cases. This is similar to the activity diagram. This will help you if you have missed out on any components or scenarios. You need to explain this verbally to the interviewer.

### 6. Code
The coding part is optional in this round but the interviewer may ask you to write the code for a specific feature or component. In case if you're asked to write the code prioritize the things given below.
- Start with the Interfaces or abstract classes
- Write the code for the core objects and the internal structure.
- Write the implementation part.
- Write basic unit tests (e.g., JUnit) to validate core functionality.
The interviewer evaluates both design clarity (interfaces, structure, extensibility) and implementation correctness (working logic, clean code, and basic test cases)
