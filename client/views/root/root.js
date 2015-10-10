Template.root.helpers({
  signedIn: () => {
    return !!Meteor.user();
  }
});

Template.root.events({
  'click #btnCreateMatch': () => {
    Meteor.call('matches.create', (err, matchId) => {
      FlowRouter.go(`/match/${matchId}`);
    });
  }
})
