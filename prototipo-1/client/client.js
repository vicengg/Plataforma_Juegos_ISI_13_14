//user = "adri";
//password = "123456";
//$("#login-buttons-password").click(function(){
//	alert("bienvenido");
//});


Template.loginButtons.events({
	'click': function () {
		alert("as");
	}
});

Accounts.ui.config({

	passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL"

});
