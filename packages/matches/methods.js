Meteor.methods({
  'matches.create': function() {
    return Matches.insert({
      gabrielChatId: Chats.insert({}),
      justoChatId: Chats.insert({})
    });
  },

  'matches.start': function(matchId) {
    if (Meteor.isServer) {
      Matches.update(matchId, { $set: { started: true } });

      match = Matches.findOne(matchId);
      callback = () => {
        Chats.clearEntries(match.gabrielChatId);
        Chats.clearEntries(match.justoChatId);
        Meteor.setTimeout(callback, 10000);
      };

      Meteor.setTimeout(callback, 10000);
    }
  }
});
