//MASTER LAYOUT
Router.configure({
  layoutTemplate: 'master'
});

//STATIC PAGES
//LOGIN and REGISTER
Router.route('/login', {name: 'login'});
//logout route
Router.route('/logout', function (){
  
  Meteor.logout(function(err){
   
    if(err){
      console.log('Error logging out happened: ' + err);
    }
    
    Router.go('/');
  });
});

//END STATIC PAGES


//GEAR GRINDS LIST
Router.route('/', {name: 'geargrindsList'});
//CREATE GRIND
Router.route('/grind/new', {name: 'geargrindsSubmitForm'});
//EDIT GRIND

Router.route('/grind/:_id/edit', {
  name: 'grindEdit',
  data: function() { return Geargrinds.findOne(this.params._id); }
});









var loginRequired = function(){
  if (Meteor.user()){
    this.next();
  }else{
    this.render('accessDenied');
  }
};

Router.onBeforeAction(loginRequired, {only: 'geargrindsSubmitForm'});