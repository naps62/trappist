Package.describe({
  name: 'signals',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  var packages = [
    'ecmascript',
    'aldeed:simple-schema',
    'aldeed:collection2'
  ];

  api.use(packages);
  api.imply(packages);

  api.addFiles([
    'signals.js'
  ]);

  api.export('Signals');
});
