# Types of Load Balancer

Source: https://www.geeksforgeeks.org/system-design/types-of-load-balancer/

Load Balancers distribute incoming network traffic across multiple servers to ensure optimal resource utilization, minimize response time, and prevent server overload. They can be implemented in different ways depending on infrastructure and scalability needs.
- Run on standard servers or operating systems, offering flexibility and cost-effectiveness, including cloud-based or virtual appliances for easy scalability and deployment.
- Dedicated physical devices designed specifically for high performance and reliability.
Example: A popular e-commerce platform might use a hardware load balancer for on-premises traffic, a software load balancer for internal microservices, and a virtual load balancer in the cloud to handle seasonal spikes.

## Types of Load Balancer
Load balancers can be classified based on their configuration and the way they handle network traffic.

### Based on Deployment
1. Hardware Load Balancer
A hardware load balancer is a dedicated physical appliance designed to distribute traffic across multiple backend servers. It is commonly used in enterprise environments that require high throughput and dedicated networking capabilities.
Example: F5 BIG-IP appliances.
- Pros: High performance and dedicated resources.
- Cons: Expensive and less flexible than software or managed cloud solutions.
2. Software Load Balancer
A software load balancer runs on a general-purpose server, virtual machine, or container and distributes traffic using configurable routing algorithms.
Example: NGINX and HAProxy.
- Pros: Flexible, cost-effective, and easy to deploy.
- Cons: Performance depends on the resources of the system on which it runs.
3. Cloud Load Balancer
A cloud load balancer is a managed service provided by a cloud platform. It distributes traffic across cloud resources while the provider manages much of the underlying infrastructure.
Example: AWS Elastic Load Balancing.
- Pros: Scalable, highly available, and easy to integrate with cloud infrastructure.
- Cons: May introduce ongoing service costs and provider-specific dependencies.

### Based on Traffic Handling

#### 1. Layer 4 Load Balancer
A Layer 4 load balancer operates at the Transport Layer and routes traffic using information such as IP addresses, TCP/UDP protocols, and port numbers.
It generally does not inspect application-level information such as URLs or HTTP headers.
Examples: HAProxy in TCP mode and AWS Network Load Balancer.
- Pros: Efficient for high-volume connection-based traffic.
- Cons: Cannot normally perform application-content-based routing.
Features
- Routes using IP addresses and port numbers.
- Supports protocols such as TCP and UDP.
- Requires less application-level inspection.
- Can support connection-oriented traffic distribution.

#### 2. Layer 7 Load Balancer
A Layer 7 load balancer operates at the Application Layer and can inspect application-level information before deciding where to route a request.
Routing decisions may use:
- URL paths
- Hostnames
- HTTP headers
- Cookies
- Request methods
Examples: NGINX HTTP load balancing and AWS Application Load Balancer.
- Pros: Supports intelligent and content-based routing.
- Cons: Requires more application-level processing than basic Layer 4 routing.
Features
- Content-based routing
- Host- and path-based routing
- Header- and cookie-based routing
- SSL/TLS termination
- Application-aware traffic management

#### 3. Global Server Load Balancing (GSLB)
Global Server Load Balancing distributes users across servers or data centers located in different geographic regions.
Unlike local load balancing, GSLB commonly uses DNS-based or global traffic-management mechanisms to select the most appropriate regional endpoint.
Examples:
- Cloudflare Load Balancing with geographic or dynamic steering.
- Amazon Route 53 with latency-based routing.
- Pros: Improves global availability and can reduce latency for geographically distributed users.
- Cons: More complex to configure and may depend on DNS behavior, health checks, and regional routing policies.
Features
- Geographic or latency-based routing
- Multi-region traffic distribution
- Health-aware routing
- Regional failover
- Disaster-recovery support
