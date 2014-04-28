if (Meteor.isClient) {
  Router.map(function () {
    this.route('home', {
      path: '/',

      waitOn: function () {
        return [
          // this ready message will be sent right away
          Meteor.subscribe('one'),

          // this ready handle will be ready in a few seconds
          // later than the first handle
          Meteor.subscribe('two')
        ]
      },

      action: function () {
        if (this.ready())
          console.log('ready');
        else
          console.log('not ready');
      }
    });
  });
}

if (Meteor.isServer) {
  Meteor.publish('one', function () {
    this.ready();
  });

  Meteor.publish('two', function () {
    var self = this;
    setTimeout(function () {
      self.ready();
    }, 1000);
  });
}
