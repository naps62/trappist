Template.match.onRendered(function() {
  Meteor.call('matches.start', FlowRouter.current().params.matchId);
});

Template.match.helpers({
  match: currentMatch
});

function currentMatch() {
  return Matches.findOne(FlowRouter.current().params.matchId);
}
