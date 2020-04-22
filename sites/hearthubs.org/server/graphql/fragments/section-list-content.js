const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteSectionListContentFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
}

`;