import dns from 'node:dns'

const SITE_NAME = 'meta.ua'

dns.resolve4(SITE_NAME, (error, addresses) => {
  console.log(`       IPv4:  ${addresses.join('  |  ')}`)
})

dns.resolve6(SITE_NAME, (error, addresses) => {
  console.log(`       IPv6:  ${addresses.join('  |  ')}`)
})

dns.resolve(SITE_NAME, 'A', (error, addresses) => {
  console.log(`   'A' IPv4:  ${addresses.join('  |  ')}`)
})

dns.resolve(SITE_NAME, 'AAAA', (error, addresses) => {
  console.log(`'AAAA' IPv6:  ${addresses.join('  |  ')}`)
})

// A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT
