Signals = new Meteor.Collection('signals', { collection: null });

Signals.attachSchema(new SimpleSchema({
  gabrielResult: {
    type: Number
  },
  justoResult: {
    type: Number
  }
}));

Signals.sendVotes = function(gabrielResult, justoResult) {
  console.log('here2');
  Signals.insert({
    gabrielResult: gabrielResult,
    justoResult: justoResult
  });
}
