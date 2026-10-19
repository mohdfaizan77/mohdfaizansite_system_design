# System Design Tutorial

Source: https://www.geeksforgeeks.org/system-design/system-design-tutorial/

System Design is the process of designing the architecture, components, and interfaces of a system to meet user and business requirements. It helps define how different parts of a system work together to build a reliable and scalable solution.
- System Design focuses on structuring a system to meet functional and non-functional requirements.
- It covers concepts from basic principles to advanced system architecture.

## Importance of System Design
System Design helps in building software systems that are scalable, reliable, efficient, and maintainable.
- Scalability and Reliability: System design ensures systems can grow and handle increased demand without failure.
- Efficient Resource Management: It helps in optimizing resource allocation, ensuring fast and responsive applications.
- Adaptability: System design enables the creation of systems that can evolve with changing business needs, reducing long-term costs.
- Architectural Understanding: Learning different system architectures (e.g., microservices, monolithic) helps in building applications suited to various needs.
- Interview Preparation: Mastering system design is key to excelling in system design interviews, commonly asked in tech company hiring processes.

## Basics
Core concepts to get started with system design.
- System Design Introduction - HLD & LLD
- Functional and Non Functional Requirements

## High Level Design
High Level Design (HLD) focuses on the overall architecture, major components, and communication between them.
- Introduction to High Level Design
- High Level Design Diagram

### System Architectural Styles
Common architectural patterns used in system design.
- Monolithic Architecture
- Microservices
- Monolithic Vs Microservices Architecture
- Event-Driven Architecture
- Event-Driven Architecture in an E-commerce System
- Serverless Architecture
- Stateless and Stateful Systems
- Stateful Vs Stateless Architecture
- Pub/Sub Architecture

### Scalability
Learn how systems handle increasing users, traffic, and data.
- Scalability in System Design
- Horizontal and Vertical Scaling
- Choosing the Right Scalability Approach
- Designing Highly Scalable Systems
- Primary Scalability Bottlenecks in System Design

### Databases in Designing Systems
Learn how databases and storage systems are selected, designed, and scaled.
- Designing the Database
- Types of Database
- Choosing a Database - SQL or NoSQL
- File and Database Storage Systems
- Database Replication in System Design
- Types of Database Replication
- Database Sharding
- Data Partitioning
- Block, Object, and File Storage
- Normalization Process in DBMS
- SQL Query Optimization
- Denormalization in Databases
- Intro to Redis

### Consistency, Availability, Reliability & Maintainability
Core system qualities that impact user experience and system health.
- Availability in System Design
- Achieving High Availability
- Consistency in System Design
- Consistency pattern
- CAP Theorem
- Reliability in System Design
- Fault Tolerance in System Design
- Maintainability

### Load Balancing
Learn how incoming traffic is distributed across multiple servers.
- Load Balancer
- Types of Load Balancer
- Load Balancing Algorithms
- Concurrency and Parallelism
- Stateless Vs Stateful Load Balancing
- Load Balancing Vs Failover
- Consistent Hashing

### Latency, Throughput and Caching
Learn techniques for improving system performance and reducing response time.
- Latency and Throughput
- Caching in System Design
- Distributed Cache
- Design Distributed Cache
- Edge Caching
- CDN Vs Edge Server
- Cache Eviction Policies
- Cold and Warm Cache in System Design

### API Gateway, Message Queues & Rate Limiting
Focuses on orchestrating communication, queuing messages, and limiting traffic in scalable systems.
- API Gateway
- Message Queues
- Rate Limiting
- Rate Limiting Algorithm

### Protocols, CDN, Proxies & WebSockets
Networking, caching, and real-time communication fundamentals.
- Communication Protocols
- Domain Name System
- DNS Caching
- Flushing(Reset) of DNS Cache
- Time to Live(TTL)
- Content Delivery Network(CDN)
- Proxies in System Design
- Forward Proxy vs Reverse Proxy
- Web and Application Server
- Long Polling and Short Polling
- Websockets

### Event-Driven Architecture
Learn how systems communicate through events and asynchronous messaging.
- Introduction
- Event Sourcing Pattern
- Event Sourcing Vs Event Streaming
- Event-Driven APIs in Microservice Architectures
- Error Handling in Event-Driven Architecture
- Restore State in an Event-Based, Message-Driven Microservice Architecture on Failure Scenario
- Event-Driven Architecture Patterns in Cloud Native Applications
- Request-driven Vs Event-driven Microservices
- Event-Driven Architecture Vs Microservices Architecture
- Message-Driven Architecture Vs Event-Driven Architecture

### Testing
Testing methods and deployment pipelines to build robust systems.
- Unit Testing
- Integration Testing
- Load Testing
- Stress Testing
- CI/CD Pipeline

### Security Measures
Learn common security mechanisms used to protect system resources and data.
- Security Measures in System Design
- Authentication and Authorization
- Secure Socket Layer (SSL) and Transport Layer Security (TLS)
- Secure Software Development Life Cycle (SSDLC)
- Data Backup and Disaster Recovery

### Distributed System Design
Explains consensus algorithms, tracing, and security considerations in distributed system design.
- Introduction
- Consensus Algorithms in Distributed System
- Distributed Tracing
- Secure Communication in Distributed System
- Design Issues of Distributed System

### Cost & Performance Optimizations
Explains how to optimize system performance and estimate software costs effectively.
- Software Cost Estimation
- Performance Optimization Techniques
- Cost Vs Performance

## Low Level Design(LLD)
Low Level Design (LLD) focuses on the internal structure of a system, including classes, objects, interfaces, and their interactions.

### Core Concepts
- Object-Oriented Programming(OOP) Concepts
- Modularity and Interfaces
- Low Level Design or LLD
- Difference between High Level Design(HLD) and Low Level Design(LLD)

### Design Principles
- SOLID Principles
- DRY Principle
- KISS Principle
- YAGNI Principle

### UML
UML diagrams are used to visualize the structure and behavior of a system.
- Unified Modeling Language (UML)

### Design Patterns
Design patterns provide reusable solutions to common software design problems.
- Design patterns

## Interview Questions & Answers of System Design
Practice common system design problems and learn how to design scalable and efficient systems.
- Common Design Interview Questions

## System Design Interview Preparation Guide
Learn how to approach and solve System Design questions in interviews.
- Cracking System Design Round in Interviews
- Tips to Crack Low-Level System Design Interviews
- Common System Design Concepts for Interview Preparation
- Steps To Approach Object-Oriented Design Questions in Interview
