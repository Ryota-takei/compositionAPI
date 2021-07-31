module.exports = {
  client: {
    service: {
      name: 'vue-spacex',
      // URL to the GraphQL API
      url: 'https://api.spacex.land/graphql/',
    },
    // Files processed by the extension
    includes: [
      'src/**/*.vue',
      'src/**/*.js',
    ],
  },
}