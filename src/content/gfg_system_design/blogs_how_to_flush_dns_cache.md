# DNS Cache Flushing

Source: https://www.geeksforgeeks.org/blogs/how-to-flush-dns-cache/

DNS caches temporarily store previously resolved DNS records to speed up domain resolution. However, cached information may become outdated or incorrect. Flushing the DNS cache removes locally cached records, allowing fresh DNS lookups when needed.
- Refresh DNS Records: Helps retrieve updated DNS information after changes to domain records or server addresses.
- Resolve DNS Issues: Helps troubleshoot connectivity problems caused by stale or incorrect cached records.
- Limited Impact: Does not generally improve internet speed or provide ongoing protection against DNS security threats.
Example: If a website has recently moved to a new server but your system still uses an old cached IP address, clearing the DNS cache may cause the next lookup to retrieve the updated DNS record.

## When Should You Flush the DNS Cache?
DNS caches normally expire entries automatically according to their TTL values, so manual flushing is not required during normal use.
Flushing can be useful when:
- A website has recently changed its DNS records.
- A domain resolves to an outdated or incorrect IP address.
- DNS settings have recently changed.
- You are troubleshooting name-resolution problems.
- Cached DNS information appears to be corrupted.
Flushing the DNS cache does not fix every connectivity problem. It only affects locally cached DNS resolution data.

## Benefits of Flushing DNS Cache

### 1. Remove Stale DNS Records
DNS records may temporarily remain cached even after the authoritative DNS configuration changes. Flushing removes the locally stored entries so that subsequent requests can perform fresh DNS resolution.

### 2. Troubleshoot DNS Resolution Problems
Flushing can help when:
- A domain points to an old server.
- A site works on other devices but not on the current system.
- DNS configuration has recently changed.

### 3. Apply Recent DNS Changes
After a DNS migration or configuration update, clearing a local cache can help a device request the latest available DNS information instead of continuing to use a cached result. However, other DNS caches, such as recursive resolver caches, may still retain records until their TTL expires.

### 4. Remove Incorrect Local Cache Entries
If a local resolver cache contains an incorrect entry, flushing removes that cached copy.
Clearing the local cache does not protect a system from future DNS spoofing or cache-poisoning attacks. Security against forged DNS responses requires appropriate resolver protections and, where applicable, DNSSEC validation.

### 5. Simplify DNS Troubleshooting
Flushing DNS is a simple diagnostic step when a problem appears to involve hostname resolution. It can help determine whether a cached DNS entry is contributing to the issue before investigating more complex network problems.

## Flush DNS Cache on Windows, macOS, Linux
Now if you are facing any issue which is mentioned above, then explore this section to Let's see how to clear the DNS cache for macOS, Windows, and Linux.

### 1. Flush DNS Cache on Windows
Windows provides the ipconfig /flushdns command for clearing the DNS resolver cache. Microsoft documents /flushdns as an ipconfig option on current Windows versions.
Step 1: Open Command Prompt
- Press Win + R to open the Command Prompt, type cmd, and hit Enter.
Step 2: Use ipconfig
- In the opened Command Prompt window, type below command and hit Enter:
ipconfig /flushdns
Step 3: Verify the Result
Windows should display a confirmation message indicating that the DNS Resolver Cache was successfully flushed.

### 2. Flush DNS Cache on macOS
The DNS cache mechanism on macOS can vary across versions, but modern versions commonly use mDNSResponder.
Step 1: Open Terminal
Open Spotlight, search for Terminal, and launch it.
Step 2: Run the Command
A commonly used command on current macOS systems is:
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
Step 3: Enter the Administrator Password
Enter the administrator password when prompted.
The password may not appear on the screen while typing.
Step 4: Complete the Flush
The command may finish without displaying a success message.

### 3. Flush DNS Cache on Linux
Linux does not have a universal DNS cache flushing command. The command depends on the DNS caching service installed and running on the system, such as systemd-resolved, dnsmasq, or nscd.
Step 1: Open Terminal
Open the Terminal application on your Linux system.
Step 2: Check the DNS Resolver
Run the following command to check whether systemd-resolved is active:
resolvectl status
If another DNS caching service is used, identify it before proceeding.
Step 3: Flush the DNS Cache
Use the appropriate command based on your DNS caching service.
For systemd-resolved (Ubuntu, Debian, Arch Linux, etc., when enabled):
sudo resolvectl flush-caches
For older systemd-resolved versions:
sudo systemd-resolve --flush-caches
For dnsmasq:
sudo systemctl restart dnsmasq
For nscd:
sudo systemctl restart nscd
Step 4: Verify the Cache Flush
For systems using systemd-resolved, run:
resolvectl statistics
This displays DNS resolver statistics, including cache information where available. It does not directly confirm that every cached entry was removed.
If successful, you won't see any confirmation message, but your DNS cache will be flushed.

## What Happens After Flushing DNS Cache
After the cache is cleared:
- Existing locally cached DNS entries are removed.
- The next request for a domain may require a fresh DNS lookup.
- New DNS responses are cached again according to their TTL and resolver policy.
- Subsequent lookups may once again be faster because cached records are available.
There may therefore be a small delay during the first lookup after a cache flush.

## Limitations of Flushing DNS Cache
Flushing the DNS cache removes locally cached DNS records but cannot resolve every website or network issue. Key limitations include:
- Website or Server Downtime: Cannot restore access if the destination website or server is unavailable.
- Incorrect DNS Configuration: Cannot fix incorrect authoritative DNS records because the same incorrect information may be retrieved again.
- Internet Connectivity Problems: Does not resolve network disconnections, router failures, ISP outages, or Wi-Fi issues.
- Incorrect Network Configuration: Cannot fix incorrect IP addresses, default gateways, DNS server settings, or VPN configurations.
- Upstream DNS Caches: Clearing the local cache does not remove records stored by ISP, public, or other recursive DNS resolvers.
- Browser-Specific DNS State: Some browsers maintain separate DNS-related caches that may not be cleared by flushing the operating system's DNS cache.

## Best Practices
- Flush DNS only when troubleshooting stale or incorrect cached records.
- Normally allow TTL expiration to manage DNS cache freshness.
- Verify DNS configuration before assuming the cache is responsible.
- On Linux, identify the active resolver before running a flush command.
- Avoid treating DNS flushing as a routine performance optimization.
- Do not rely on cache flushing as a security control.
