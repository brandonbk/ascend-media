const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const page = require('@ascend-media/package-shared/templates/dynamic-page');
const queryFragment = require('@ascend-media/package-shared/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
