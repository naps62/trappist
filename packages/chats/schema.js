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

Chats.clearEntries = function(chatId) {
  Chats.update(chatId, {
    $set: {
      entries: []
    }
  })
}
