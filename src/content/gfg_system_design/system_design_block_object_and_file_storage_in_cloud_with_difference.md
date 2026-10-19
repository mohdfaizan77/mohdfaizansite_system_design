# Block, Object, and File Storage in System Design

Source: https://www.geeksforgeeks.org/system-design/block-object-and-file-storage-in-cloud-with-difference/

Storage is an important component of system design because it determines how data is stored, accessed, and managed. Different storage types are used depending on application requirements and data structure.
- Block Storage stores data in fixed-size blocks and is commonly used in databases and virtual machines.
- File Storage organizes data in files and directories, making it suitable for shared file systems and document storage.
- Object Storage stores data as objects with metadata and unique identifiers, ideal for large-scale unstructured data.

## Block Storage
Block storage divides data into addressable blocks that can be read and written independently. It does not organize data into files or folders by itself; a file system or application typically interprets those blocks.
- Stores data as individually addressable blocks.
- Commonly used for databases, virtual machines, and transactional workloads.
- Well suited to workloads that require frequent low-latency reads and writes.
Example: A database running on a cloud virtual machine may use block storage such as Amazon EBS to store database files and transaction logs.

### Features
- Low-Latency Access: Well suited to frequent read/write operations.
- Flexible Usage: Can be formatted with different file systems or used directly by applications such as databases.
- Expandable Capacity: Many block-storage services allow capacity to be increased, subject to platform limits.
- Independent Blocks: Individual blocks can be addressed and updated separately.
- Durability Options: Some platforms use replication or redundancy to improve durability and availability.

## Object Storage
Object storage stores data as independent objects, each containing data, metadata, and a unique identifier. It uses a flat logical namespace instead of a traditional file and folder hierarchy.
- Stores large volumes of unstructured data, such as images, videos, and documents.
- Commonly accessed through APIs rather than traditional file-system operations.
- Well suited for backups, media files, application logs, data lakes, and static assets.
Example: A video-streaming platform may use object storage such as Amazon S3 to store videos, thumbnails, and other media files.

### Features
- Large-Scale Storage: Designed to handle very large datasets across distributed infrastructure.
- Rich Metadata: Objects can include metadata that helps with classification and management.
- API-Based Access: Commonly accessed through HTTP/HTTPS APIs.
- Cost Efficiency: Often economical for large amounts of unstructured data.
- Durability: Cloud object-storage systems commonly use redundancy mechanisms, although guarantees depend on the provider and storage class.

## File Storage
File storage organizes data into files and directories using a hierarchical structure. Files are accessed through paths, making it suitable for applications requiring shared access and traditional file-system operations.
- Organizes data into files and folders for easy management and retrieval.
- Supports shared file access across multiple users or applications.
- Commonly used for shared documents, user directories, development workspaces, and content repositories.
Example: An organization may use a network-attached storage (NAS) system or Amazon EFS to store and share files across multiple users and applications.

### Features
- Hierarchical Organization: Uses directories and subdirectories.
- Path-Based Access: Files are accessed through paths such as /projects/report.pdf.
- Compatibility: Works well with applications that expect traditional file-system interfaces.
- Shared Access: Many file-storage systems support access by multiple users or machines.
- Access Control: File systems commonly support permissions and may provide locking or consistency mechanisms depending on the implementation.

## Block Storage Vs Object Storage Vs File Storage
Aspect	Block Storage	Object Storage	File Storage
Data Organization	Addressable blocks	Objects with metadata and IDs	Files and directories
Access Method	Block-level access	API-based object access	Path-based file access
Best Fit	Databases, VMs, transactional workloads	Media, backups, logs, data lakes	Shared files, documents, home directories
Performance	Well suited to low-latency read/write workloads	Optimized for large-scale object access	Depends on file system and underlying storage
Scalability	Depends on storage platform	Commonly designed for very large distributed datasets	Depends on file system and infrastructure
Examples	AWS EBS, Persistent Disk, SAN	Amazon S3, Azure Blob Storage, Google Cloud Storage	Amazon EFS, Azure Files, Google Filestore
