
// Crea las bases de datos de los juegos si no están creadas.
Meteor.startup(function () {
	if(Games.find({name:"Clarcassonne"}).count() === 0){
		Games.insert({name:"Clarcassonne"});
	};
	if(Games.find({name:"Angry Birds"}).count() === 0){
		Games.insert({name:"Angry Birds"});
	};
});

Meteor.publish("users", function() {
 	
	return Meteor.users.find();

});

Meteor.publish("messages", function() {
 	
	return Messages.find();

});

Meteor.publish("games", function() {
 	
	return Games.find();

});

// Para cada cliente, publica la lista de partidas del juego en el que abre sesión.
Meteor.publish("matches", function(current_game_id) {

	return Matches.find({"game_id" : current_game_id});	

});
