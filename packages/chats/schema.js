Chats = new Mongo.Collection('chats');

Chats.attachSchema(new SimpleSchema({
  entries: {
    type: [Object],
    defaultValue: []
  },
  'entries.$.userId': {
    type: String
  },
  'entries.$.value': {
    type: Number,
    min: 1,
    max: 5
  }
}))

Chats.reduceEntries = function(chatId) {
  var entries = Chats.findOne(chatId).entries;
  var grouped = _.groupBy(entries, 'value');
  var sorted = _.sortBy(grouped, 'length');
  sorted.reverse();

  var mostVoted;
  if (sorted[0] && sorted[0][0]) {
    mostVoted = sorted[0][0].value;
  } else {
    mostVoted = _.random(1, 5);
  }

  Chats.update(chatId, {
    $set: {
      entries: []
    }
  });

  return mostVoted;
}
