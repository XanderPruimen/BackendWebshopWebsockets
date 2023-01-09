var server = require('ws').Server;
var s = new server({ port: 5002 });

s.on('connection', function(ws){
    ws.on('message', function(message){
console.log(message.toString())
       // message = JSON.parse(message);

        if(message.type == "message") {
            ws.personName = message.data;
        }

        console.log("Recieved: " +message.data);
       
        

        s.clients.forEach(function e(client){
            console.log("forEach test")
            console.log(client)
            console.log(message.toString())
            let bericht = message.toString()
            if(message == "Hallo" , message == "Hi", message == "Hey"){
                client.send(
                    
                  
                    "Hallo waar kan ik mee helpen?"
                    );
            }
            if(message == "1"){
                client.send(
                "Mustang uit 1966 is een mooie auto"
                );
            }
            if(message == "2"){
                client.send(
                "If you don't think Mustangs are nice cars. You are on the wrong site!"
                );
            }
            if(message == "3"){
                client.send(
                "Mustang?"
                );
            }
            if(message == "4"){
                client.send(
                "Do you want a Mustang?"
                );
            }
        
       });

        

    });
    ws.on('close', function() {
        console.log("I Lost a client");
    });
});

