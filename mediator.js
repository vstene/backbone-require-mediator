define(['underscore', 'backbone'], function(_, Backbone) {
    var Mediator = {};

    Mediator.subscribe = Backbone.Events.on;
    Mediator.unsubscribe = Backbone.Events.off;
    Mediator.publish = Backbone.Events.trigger;

    return Mediator;
});
