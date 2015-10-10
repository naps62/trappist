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
    if (event.keyCode === 13) {
      newEntry = {
        userId: Meteor.userId(),
        value: parseInt(event.target.value)
      }
      Chats.update(Template.instance().data.id, {
        $push: { entries: newEntry }
      });
      event.target.value = '';
    }
  }
});

function currentChat() {
  return Chats.findOne({ _id: Template.instance().data.id }) || {};
}
