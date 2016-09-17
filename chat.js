var config = require("./config.json");
console.log(config.facebook);

var login = require("facebook-chat-api");

 
// Create simple echo bot 
login({email: config.facebook.user, password:config.facebook.password}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.getThreadList(0, 100, 'inbox', function(err,list){
        console.log(list)
    });
 
});