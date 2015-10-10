Package.describe({
  name: 'matches',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'ecmascript',
    'aldeed:simple-schema',
    'aldeed:collection2',
    'chats'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'schema.js',
    'methods.js'
  ]);

  api.export('Matches');
});
