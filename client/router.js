FlowRouter.route('/', {
  name: 'root',
  action: function() {
    BlazeLayout.render('root');
  }
});

FlowRouter.route('/match/:matchId', {
  name: 'match',
  action: function() {
    BlazeLayout.render('match');
  }
});
