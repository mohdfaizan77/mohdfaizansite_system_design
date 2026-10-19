# Stateful Vs Stateless Architecture

Source: https://www.geeksforgeeks.org/system-design/stateful-vs-stateless-architecture/

Stateful vs Stateless Architecture defines how a system manages client session or state data during interactions. This choice affects scalability, performance, and how requests are handled across multiple server instances.
- Stateful: The server stores session or state data across multiple requests.
- Stateless: Each request is independent and contains the information needed to process it, without relying on previously stored session state.

## Stateful Architecture
The server maintains the state or session information of each client. This means that the server keeps track of the client's data and context throughout multiple interactions or requests.
- Often involve storing session data in server memory, databases, or other storage mechanisms.
- Examples include traditional web applications that use server-side sessions to store user data or shopping cart contents.
Example: An online shopping website where the server stores a user’s login session and shopping cart. If the user adds items to the cart, the server remembers those items during the session.

### Benefits of Stateful Architecture
Stateful architecture is useful when an application needs to maintain session context across multiple requests.
- Session Persistence: Maintains session context across multiple requests, which is useful for multi-step interactions and workflows.
- Context Preservation: Allows the server to retain information from previous requests.
- Session-Aware Workflows: Simplifies interactions that depend on previously stored session information.
- Simplified Session Handling: The server can maintain session context without requiring the client to send the complete session state with every request.

## Stateless Architecture
In a stateless architecture, the server does not rely on server-local client session state from previous requests. Each request contains, or provides access to, the information required for processing.
- Authentication information may be carried using tokens, cookies, or other credentials.
- Horizontal scaling and failover can be simpler because requests are not tied to a particular server instance.
- REST APIs are commonly designed to follow stateless interaction principles.
Example: A mobile application sends an authentication token with each API request. Any suitable server instance can validate the request and process it without depending on session data stored by a previous server.

### Benefits of Stateless Architecture
Stateless architecture offers advantages in scalability and operational simplicity because each request can be processed independently.
- High Scalability: Makes horizontal scaling simpler because requests do not depend on server-local session state.
- Simplified Failover: Requests can generally be rerouted to another server instance when a server becomes unavailable, provided required state is available elsewhere.
- Simplified Load Balancing: Requests can generally be distributed across server instances without requiring sticky sessions.
- Operational Simplicity: Deploying and replacing server instances can be simpler because they do not need to maintain server-local session state.

## When to Use Stateful vs Stateless Architecture

### Choose Stateful Architecture when
- The application requires long-lived session context.
- Multi-step interactions depend heavily on previous requests.
- Maintaining session data on the server simplifies the workflow.

### Choose Stateless Architecture when
- Horizontal scaling is an important requirement.
- Requests should be handled by any available server instance.
- The system uses APIs, distributed services, or independently scalable application servers.

## Stateful Vs Stateless Architecture
Below are the key differences between Stateful and Stateless Architecture:
Aspect	Stateful Architecture	Stateless Architecture
Session State	Server maintains client or session context across requests	Requests do not rely on server-local session state
Scaling	May require shared session state or session affinity	Horizontal scaling is generally simpler
Failover	Failure may affect sessions stored on that server	Requests can usually be routed to another suitable instance
Load Balancing	May require sticky sessions when state is stored locally	Requests can generally be distributed across instances
State Management	Requires management and consistency of session state	Reduces server-local session management, though external data stores may still be used
