Template.chat.helpers({
  content: function() {
    chat = currentChat();
    if (chat)
      return chat.entries.map((entry) => entry.value).join('');
  },
  entries: function() {
    return currentChat().entries
  }
})

Template.chat.events({
  'keyup #txtInput': function(event, tpl) {
    var value = parseInt(event.target.value);
    event.target.value = '';

    if (!_.isFinite(value) || value < 0 || value > 5) {
      return;
    }

    newEntry = {
      value: value
    };

    Chats.update(Template.instance().data.id, {
      $push: { entries: newEntry }
    });
  }
});

function currentChat() {
  return Chats.findOne({ _id: Template.instance().data.id }) || {};
}
