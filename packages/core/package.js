Package.describe({
  name: 'core',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'ecmascript',
    'accounts-base',
    'accounts-password',
    'accounts-ui',
    'fourseven:scss',
    'kadira:flow-router',
    'kadira:blaze-layout',
    'mquandalle:jade'
  ]

  api.use(packages);
  api.imply(packages);
});
