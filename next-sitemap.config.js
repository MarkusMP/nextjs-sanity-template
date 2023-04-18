/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUTBLIC_SITE_UR || 'http://localhost:3000',
  generateRobotsTxt: true,
}
