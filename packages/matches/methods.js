Meteor.methods({
  'matches.create': function() {
    return Matches.insert({
      gabrielChatId: Chats.insert({}),
      justoChatId: Chats.insert({})
    });
  },

  'matches.start': function(matchId) {
    if (Meteor.isServer) {
      if (Matches.findOne(matchId).started) {
        return;
      };

      Matches.update(matchId, { $set: { started: true } });

      match = Matches.findOne(matchId);
      callback = () => {
        var gabrielVotes = Chats.reduceEntries(match.gabrielChatId);
        var justoVotes = Chats.reduceEntries(match.justoChatId);
        Signals.sendVotes(gabrielVotes, justoVotes);
        Meteor.setTimeout(callback, 5000);
      };

      Meteor.setTimeout(callback, 5000);
    }
  }
});
