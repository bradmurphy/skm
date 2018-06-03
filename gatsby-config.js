module.exports = {
  siteMetadata: {
    title: 'Gatsby Wordpress Redux Integration',
  },
  plugins: [
    /*
    * Gatsby's data processing layer begins with “source”
    * plugins. Here the site sources its data from Wordpress.
    */
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        /*
        * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
        * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
        */
        baseUrl: 'skwp.bradmurphydev.com',
        // The protocol. This can be http or https.
        protocol: 'http',
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com.
        // Defaults to true.
        useACF: true,
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://skwp.bradmurphydev.com',
          replacementUrl: 'http://localhost:8000',
        },
        verboseOutput: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
};
