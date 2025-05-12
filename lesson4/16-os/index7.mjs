import os from 'os'

console.log(os.networkInterfaces())

/*
 {
   'Ethernet 3': [
   {
     address: 'fe80::1e13:983b:762c:c0e4',
     netmask: 'ffff:ffff:ffff:ffff::',
     family: 'IPv6',
     mac: '24:4b:fe:5b:50:fb',
     internal: false,
     cidr: 'fe80::1e13:983b:762c:c0e4/64',
     scopeid: 12
   },
   ...
*/
