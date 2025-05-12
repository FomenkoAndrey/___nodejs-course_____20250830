import dns from 'node:dns'

const SITE_NAME = 'meta.ua'

dns.resolveMx(SITE_NAME, (error, mxRecords) => {
  console.log(mxRecords)
})
