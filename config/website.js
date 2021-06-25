const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Eric Flatt - Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Eric Flatt - Portfolio', // Alternative Site title for SEO
  siteTitleShort: 'Eric', // short_name for manifest
  siteHeadline: 'Eric Flatt - Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://ericflattdesign.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: 'src/pages/img/eFavicon.png', // Used for SEO and manifest
  siteDescription: 'Eric Flatt - Portfolio',
  author: 'EricFlatt', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: '', // Facebook Language
  googleAnalyticsID: 'UA-107339411-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
