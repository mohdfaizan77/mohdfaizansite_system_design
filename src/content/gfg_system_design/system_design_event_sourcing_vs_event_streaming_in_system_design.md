# Event Sourcing Vs Event Streaming in System Design

Source: https://www.geeksforgeeks.org/system-design/event-sourcing-vs-event-streaming-in-system-design/

Event Sourcing and Event Streaming are related concepts used in modern system design, but they solve different problems. Event Sourcing focuses on storing application state changes as an authoritative history of events, while Event Streaming focuses on continuously publishing, transporting, and processing events between systems.
- Event Sourcing: Stores state changes as events so application state can be reconstructed from the event history.
- Event Streaming: Continuously delivers and processes streams of events for analytics, integration, monitoring, and event-driven workflows.

## Event Sourcing
Event Sourcing is a data persistence pattern that stores application state changes as a sequence of immutable events rather than storing only the latest state. These events provide a complete history of changes and allow the current state to be reconstructed.
- Event Storage: Records state changes as events such as AccountOpened, MoneyDeposited, and MoneyWithdrawn.
- State Reconstruction: Replays stored events in sequence to rebuild the current or previous application state, optionally using snapshots to improve performance.
Example: In a banking system, instead of storing only the final account balance, every transaction like “Money Deposited”, “Money Withdrawn”, and “Transfer Completed” is stored as an event. The current balance is calculated by replaying all these events in order.

## Event Streaming
Event Streaming is a data processing approach where events are continuously published to a stream and consumed by applications as they become available. It enables near-real-time data processing and communication between systems.
- Continuous Event Processing: Producers publish events to a stream, allowing multiple consumers to process them independently and at different speeds.
- Common Use Cases: Used in data pipelines, real-time analytics, monitoring, log processing, IoT applications, financial feeds, and event-driven integration.
Example: In a ride-sharing application like Uber, every activity, such as “Ride Requested”, “Driver Assigned”, “Driver Arrived”, and “Ride Completed”, is continuously published as an event to a streaming platform. Different services process these events in real time to update ride status, track drivers, calculate fares, and send notifications to passengers.

## Event Sourcing Vs Event Streaming
Below are the differences between Event Sourcing and Event Streaming:
Feature	Event Sourcing	Event Streaming
Primary Purpose	Persist application state changes as an event history	Continuously transport and process events
Main Focus	State persistence and reconstruction	Event delivery and processing
Source of Truth	Event stream is typically the authoritative state history	Depends on the surrounding architecture
Event Retention	Usually retained as part of application history	Configurable; may be short-term or long-term
State Reconstruction	Core capability	Not necessarily required
Replay	Used to rebuild state or projections	Used to reprocess retained stream data
Processing Model	Events are applied to reconstruct aggregate state	Consumers continuously process arriving events
Latency	Depends on event store, replay, snapshots, and processing design	Typically supports near-real-time processing
Performance	Depends on implementation and stream length	Depends on throughput, partitioning, consumer load, and infrastructure
Recovery	State can be reconstructed from events and snapshots	Consumers can recover using retained events, offsets, or checkpoints
Typical Uses	Audit-heavy systems, order lifecycles, financial ledgers, workflow history	Analytics, monitoring, data pipelines, event-driven integration, IoT
Storage Role	Events represent persisted application state changes	Stream storage supports transport, retention, replay, and processing
Common Technologies	EventStoreDB, relational/custom event stores, domain-specific stores	Apache Kafka, Apache Pulsar, Amazon Kinesis, similar streaming platforms
