const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@ascend-media/package-bulletin/graphql/fragments/website-section-page');
const section = require('@ascend-media/package-bulletin/templates/website-section');
const exhibitors = require('@ascend-media/package-bulletin/templates/website-section/exhibitors');
const membership = require('@ascend-media/package-bulletin/templates/website-section/membership');
const program2020 = require('../../templates/website-section/2020-program');

module.exports = (app) => {
  app.get('/:alias(2020-program)', withWebsiteSection({
    template: program2020,
    queryFragment,
  }));

  app.get('/:alias(exhibitors)', withWebsiteSection({
    template: exhibitors,
    queryFragment,
  }));

  app.get('/:alias(membership)', withWebsiteSection({
    template: membership,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
