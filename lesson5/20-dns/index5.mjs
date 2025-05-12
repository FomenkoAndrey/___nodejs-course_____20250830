import dns from 'node:dns'

const SITE_NAME = 'google.com.ua'

dns.resolve(SITE_NAME, 'A', (error, addresses) => {
  console.log(addresses)

  dns.reverse(addresses[0], (error, namesHosts) => {
    console.log(namesHosts)
  })
})
