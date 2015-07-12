Template.geargrindItem.helpers({
  isYourGrind: function(){
    return this.userId === Meteor.userId();
  }
});