import dns from 'node:dns'

const SITE_NAME = 'google.com.ua'

dns.resolveNs(SITE_NAME, (error, addresses) => {
  console.log(addresses)
})
