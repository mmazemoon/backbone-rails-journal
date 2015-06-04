BackboneRailsJournal.Collections.Posts = Backbone.Collection.extend({

  url: "/posts",
  model: BackboneRailsJournal.Models.Post,
  getOrFetch: function(id) {}

});
