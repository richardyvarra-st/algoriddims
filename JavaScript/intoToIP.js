function int32ToIp(int32){
  return (int32 >>> 24) + '.' + (int32 >> 16 & 255) + '.' + (int32 >> 8 & 255) + '.' + (int32 & 255);
}

// Alternative solution:
function int32ToIp(int32){
    const octet1 = (int32 >> 24) & 255; // Get the first 8 bits
    const octet2 = (int32 >> 16) & 255; // Get the next 8 bits
    const octet3 = (int32 >> 8) & 255;  // Get the next 8 bits
    const octet4 = int32 & 255;         // Get the last 8 bits
    
    // Combine the octets into an IPv4 address string
    return `${octet1}.${octet2}.${octet3}.${octet4}`;
  }

  /*
  Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

  
  
  
  */ 