Geargrinds = new Mongo.Collection('geargrinds');

Geargrinds.allow({
  update: function(userId, grind) {
    return ownsDocument (userId, grind);
    },
  remove: function(userId, grind) {
   return ownsDocument (userId, grind);
    },
});

Meteor.methods({
  grindInsert: function(grindAttributes){
    check(Meteor.userId(), String);
    check(grindAttributes, {
      title: String
    });
    

    
    
    var user = Meteor.user();
    var grind = _.extend(grindAttributes, {
      userId: user._id,
      author: user.username,
      createdAt: new Date()
    });
    
    Geargrinds.insert(grind);
  }
});