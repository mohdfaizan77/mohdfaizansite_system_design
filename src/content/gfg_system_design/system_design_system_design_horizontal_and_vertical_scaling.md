# Horizontal and Vertical Scaling | System Design

Source: https://www.geeksforgeeks.org/system-design/system-design-horizontal-and-vertical-scaling/

In system design, scaling is important for handling increased workloads. Horizontal scaling and vertical scaling are two approaches to increasing system capacity. Scaling can improve a system's ability to handle higher workloads, but it does not by itself guarantee high availability or fault tolerance.
- Adding more servers or instances to distribute load and handle high traffic efficiently.
- Upgrading a single server’s CPU, RAM, or storage to increase its capacity.
Example: A large e-commerce platform may use horizontal scaling by adding more servers during high traffic events like sales, while a small application may use vertical scaling by upgrading the server’s RAM or CPU.

## Vertical Scaling
Vertical scaling, also known as scaling up, increases the resources of an existing machine, such as CPU, memory, or storage.
- The same server is upgraded instead of adding more servers.
- It is often simpler to implement because fewer architectural changes are required.
- It is commonly useful for smaller systems, databases, and applications that do not yet require distributed deployment.

### Advantages
- Simple to Implement: Usually requires fewer architectural changes than horizontal scaling.
- Improved Capacity: More CPU, memory, or storage can increase the workload a machine can handle.
- Lower Operational Complexity: Fewer machines may be easier to monitor and manage.

### Limitations
- Hardware Limits: Scaling is limited by the maximum capacity supported by the machine or platform.
- Potential Downtime: Some upgrades may require restarting, resizing, or replacing the machine.
- Limited Failure Isolation: If the workload depends heavily on a single machine, failure of that machine can affect availability unless redundancy is provided.
- Cost at Higher Tiers: High-capacity machines can become expensive.

## Horizontal Scaling
Horizontal scaling, also known as scaling out, increases system capacity by adding more machines or application instances.
- Multiple instances share the workload.
- A load balancer is commonly used to distribute incoming traffic.
- The application and its dependencies must support distributed operation.

### Advantages
- Higher Capacity: Additional nodes can process more requests or workloads.
- Flexible Growth: New instances can be added as demand increases.
- Improved Availability Potential: Traffic can be redirected to healthy instances when redundancy and failure handling are configured properly.
- Independent Expansion: Distributed architectures can continue growing beyond the capacity of a single machine.

### Limitations
- Higher Complexity: Requires coordination across multiple machines or services.
- Distributed Data Challenges: Replication, synchronization, and consistency may become more complex.
- Network Overhead: Communication between distributed nodes introduces additional network dependency and latency.
- Operational Overhead: Monitoring, deployment, configuration, and orchestration become more complex.

## Choosing Between Horizontal and Vertical Scaling
The right approach depends on workload, architecture, cost, and operational requirements.

### Choose Vertical Scaling when
- Simplicity is important.
- The workload can still be handled efficiently by a larger machine.
- Distributed-system complexity is unnecessary.
- Fast capacity improvement is required with minimal architectural changes.

### Choose Horizontal Scaling when
- Workload growth may exceed the capacity of a single machine.
- High traffic must be distributed across multiple instances.
- Redundancy and flexible capacity expansion are important.
- The application can operate correctly across multiple nodes.
Many real systems use a hybrid approach, combining vertical and horizontal scaling depending on the requirements of individual components.

## Horizontal Vs Vertical Scaling
Aspect	Horizontal Scaling	Vertical Scaling
Method	Adds more machines or instances	Adds resources to an existing machine
Capacity	Can grow by adding additional nodes	Limited by maximum machine capacity
Complexity	Higher due to distributed operation	Generally simpler
Availability	Can support redundancy across nodes	May depend more heavily on individual machines
Best Fit	Large or rapidly growing distributed systems	Small-to-medium systems or workloads that scale well on one machine
Cost Model	Adds infrastructure incrementally	Larger machines may become increasingly expensive
