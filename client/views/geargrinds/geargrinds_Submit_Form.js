Template.geargrindsSubmitForm.events({
  'submit form': function(e){
    e.preventDefault();
    
    var grind = {
      title: $(e.target).find('[name=title]').val()
    };

    Meteor.call('grindInsert', grind, function(error, result){
      
      if(error){
        return alert(error.reason);
      }
      Router.go('/');
    });
  }
});