Meteor.publish('geargrinds', function(){
  return Geargrinds.find();
});