Package.describe({
  name: 'chats',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'ecmascript',
    'aldeed:simple-schema',
    'aldeed:collection2'
  ]);

  api.addFiles([
    'schema.js',
    'methods.js'
  ]);

  api.export('Chats');
});
