Template.grindEdit.events({
  'click .delete': function(e){
    e.preventDefault();
    
    if(confirm("Delete this Grind??!?"))
    {
      var grindId = this._id;
      Geargrinds.remove(grindId);
      Router.go('/');
    }
  },
  
  'submit form': function(e){
    e.preventDefault();
    
    var grindId = this._id;
    
    var grindUpdate = {
      title: $(e.target).find('[name=title]').val()
    };
    
    Geargrinds.update(grindId, {$set: grindUpdate}, function(err){
      if(err){
        alert(err.reason);
        
      }else{
        Router.go('/');
      }
    });
  }
});