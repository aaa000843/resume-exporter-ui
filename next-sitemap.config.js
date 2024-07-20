/**
 * @type {import('next-sitemap').IConfig}
 * @see https://github.com/iamvishnusankar/next-sitemap#readme
 */
module.exports = {
  // !INITIAL_CONFIG Change the siteUrl
  /** Without additional '/' on the end, e.g. https://makerzzz.com */
  siteUrl: 'https://makerzzz.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
