
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