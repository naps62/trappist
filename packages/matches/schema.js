Matches = new Mongo.Collection('matches');

Matches.attachSchema(new SimpleSchema({
  gabrielChatId: {
    type: String
  },

  justoChatId: {
    type: String
  },

  started: {
    type: Boolean,
    defaultValue: false
  }
}))
