# Rate Limiting in System Design

Source: https://www.geeksforgeeks.org/system-design/rate-limiting-in-system-design/

Rate Limiting is a technique used in system architecture to regulate how quickly a system processes or serves incoming requests or actions. It limits the quantity or frequency of client requests to prevent overload, maintain stability, and ensure fair resource distribution.
- Reduces the risk of resource abuse and denial-of-service (DoS) attacks, improving performance, reliability, and security.
- Used in web servers, APIs, network traffic management, and database access, with examples like AWS API Gateway throttling, AWS WAF, Azure API Management rate limiting and quota policies, and GCP API Gateway quota policies.
- Ensures fair resource usage among multiple users and improves overall system reliability and performance.
Example: An API allows only 100 requests per minute per user. If a user exceeds this limit, further requests are temporarily blocked or delayed to protect the system.

## Use Cases
Rate limiting is used in various systems to control request traffic, prevent abuse, and ensure fair and stable use of resources.
- API Rate Limiting: APIs commonly employ rate limitation to control the volume of client requests, ensure fair access to resources, and prevent abuse.
- Web Server Rate Limiting: Web servers employ rate limitation as a defense against denial-of-service attacks and to prevent server overload.
- Database Rate Limiting: To keep the database server from experiencing undue strain and to preserve database performance, rate limitation is applied to database queries. For instance, to avoid resource exhaustion and guarantee seamless functioning, an e-commerce website can restrict the quantity of database queries per user.
- Login Rate Limiting: To stop password guessing and brute-force attacks, login systems employ rate restriction. Systems can prevent unwanted access by restricting the quantity of login attempts made by each person or IP address.

## Common Rate Limiting Strategies
Different approaches are used to control and regulate the number of requests a user or client can make to a system within a specified time period.

### 1. IP-based Rate Limiting
IP-based rate limiting restricts the number of requests originating from a particular IP address within a specified time period. It is commonly used to reduce automated abuse, excessive requests, and unwanted traffic.
Example: An online retailer allows a maximum of 10 requests per minute per IP address to reduce automated product scraping.
Advantages
- Simple to implement using API gateways, reverse proxies, or application middleware.
- Helps limit excessive requests originating from the same IP address.
Disadvantages
- Attackers may distribute requests across multiple IP addresses using proxies or botnets.
- Legitimate users sharing the same public IP address may be rate-limited together.

### 2. Server-based Rate Limiting
Server-based rate limiting restricts the total number of requests processed by a server within a specified time period. It helps protect server resources and reduce overload during periods of high traffic.
Example: A music streaming platform limits an application server to 100 requests per second to prevent excessive traffic from affecting its performance.
Advantages
- Protects servers from excessive request volumes.
- Helps maintain system stability by controlling the overall request rate.
Disadvantages
- Independent limits on multiple servers do not automatically enforce a consistent system-wide limit.
- Legitimate requests may be delayed or rejected when the server reaches its configured limit.

### 3. Geography-based Rate Limiting
Geography-based rate limiting applies different request limits based on the estimated geographic location of a client's IP address. It is useful for managing regional traffic patterns and applying location-specific policies.
Example: A social media platform applies a stricter request limit to traffic from a region experiencing unusually high automated activity.
Advantages
- Allows different traffic limits to be applied based on regional usage patterns.
- Supports location-specific traffic management and security policies.
Disadvantages
- IP-based geographic identification may be inaccurate or bypassed using VPNs and proxies.
- Legitimate users in restricted regions may experience unnecessary rate limiting.

## Working
When a request reaches the system, the rate limiter identifies the client using information such as an IP address, user ID, API key, or other configured key.
It then checks the number or rate of requests against the configured limit.
- Client sends a request.
- Rate limiter identifies the applicable rate-limit key.
- It checks the current request count or available quota.
- If the request is within the limit, it is allowed.
- If the limit is exceeded, the request may be rejected or, in some implementations, delayed.
- The rate-limit state is updated according to the selected algorithm.
When an HTTP request is rejected because of rate limiting, systems commonly use:

```
HTTP 429 Too Many Requests
```
Some APIs may also return information indicating when the client should retry.

## Rate Limiting Algorithms
Several rate limiting algorithms are commonly used in system design to control the rate of incoming requests or actions. Below are some popular rate limiting algorithms:

### 1. Token Bucket Algorithm
The token bucket algorithm controls request rate by adding tokens to a bucket at a fixed rate. Each incoming request consumes a token, and requests are only allowed if tokens are available. This allows short bursts of traffic while maintaining an overall rate limit.
- Tokens are added slowly over time (like water filling the bucket)
- Each request removes one token from the bucket.
- If no tokens are available, the request is rejected or delayed.
Example: We get 5 tokens per minute.
- If you don’t use them, they get saved (up to a limit)
- Suddenly you send 5 requests - all allowed (burst allowed)
- 6th request - blocked (no tokens left)

### 2. Leaky Bucket Algorithm
The leaky bucket algorithm controls the rate of requests by processing them at a fixed and constant rate. Incoming requests are placed into a queue (bucket), and they are handled in order at a steady rate, regardless of how fast they arrive.
- Requests are added to the bucket (queue) as they arrive
- Requests are processed at a constant, fixed rate
- If the bucket reaches its capacity, additional requests are dropped
Example: Bucket can hold 5 requests, and processes 1 request per second
- If 5 requests come - all stored and processed slowly
- If 10 requests come - 5 stored, 5 rejected (overflow)

### 3. Fixed Window Counting Algorithm
The fixed window algorithm limits requests by counting how many requests are made within a fixed time window (e.g., per minute). If the number of requests exceeds a defined limit, further requests are rejected until the next window starts.
- Requests are counted within a fixed time interval
- If the limit is exceeded, additional requests are blocked
- Counter resets at the start of each new time window
Example: Limit = 5 requests per minute
- User sends 5 requests at 10:00–10:00:50 - Allowed
- Sends 2 more requests at 10:00:55 - Blocked
- At 10:01:00 - Counter resets - Requests allowed again

### 4. Sliding Window Log Algorithm
The sliding window log algorithm tracks each request by storing its timestamp and calculates the request rate over a moving time window. Older requests outside the window are removed, ensuring accurate rate limiting.
- Stores timestamps of incoming requests
- Removes requests older than the defined time window
- Allows or rejects requests based on count within the current window
Example: A user is allowed 5 requests per 60 seconds.
- he user sends 5 requests between 10:00:10 and 10:00:40 -> All requests are allowed.
- At 10:00:50, the user sends another request -> It is rejected because 5 requests already exist within the last 60 seconds (09:59:50–10:00:50).
- At 10:01:11, the request made at 10:00:10 falls outside the current 60-second window. The user sends another request -> It is allowed because only 4 requests remain within the sliding window.

## Client-Side Vs Server-Side Rate Limiting
Below are the differences between Client-Side and Server-Side Rate Limiting:
Client-Side Rate Limiting	Server-Side Rate Limiting
Enforced by the client application or client library	Enforced by the server or API Gateway
Requests are controlled before reaching the server	Server decides to allow, reject, or delay requests
Limited flexibility as it depends on client implementation	High flexibility with centralized control and updates
Less secure as it can be bypassed or manipulated	More secure due to centralized enforcement
May impact client performance in large-scale systems	Better scalability with global traffic control

## Challenges
Here are some challenges associated with implementing rate limiting in a system:
- Latency: Rate limitation has the potential to cause latency, particularly when requests are throttled or delayed as a result of exceeding rate constraints.
- False Positives: If the rate limiting logic is flawed or the rate restrictions are very restrictive, rate limiting may unintentionally block valid requests. False positives may cause users to become frustrated and experience service interruptions.
- Configuration Complexity: It can be difficult to set up rate limiting rules and thresholds, particularly in systems with a variety of traffic patterns and use cases.
- Scalability Challenges: If not appropriately scaled, rate limiting methods themselves may create a bottleneck under excessive load. One of the biggest challenges is making sure rate-limiting systems can manage growing traffic levels without seeing any degradation in performance.
