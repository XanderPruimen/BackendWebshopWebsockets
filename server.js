var server = require('ws').Server;
var s = new server({ port: 5002 });

s.on('connection', function(ws){
    ws.on('message', function(message){
console.log(message.toString())
       // message = JSON.parse(message);
        console.log("Client just Connected!")
        if(message.type == "message") {
            ws.personName = message.data;
        }

        console.log("Recieved: " +message.data);
       
        

        s.clients.forEach(function e(client){
            console.log("forEach test")
            console.log(client)
            console.log(message.toString())
            let bericht = message.toString()
            if(message == "Hey"){
                client.send(
                    
                  
                    "Hallo waar kan ik mee helpen?"
                    );
            }
            if(message == "1"){
                client.send(
                "Ik wil voer bestellen"
                );
            }
            if(message == "2"){
                client.send(
                "We got a lot of food for your Companion!"
                );
            }
            if(message == "3"){
                client.send(
                "Medicines?"
                );
            }
            if(message == "4"){
                client.send(
                "Do you need medicines?"
                );
            }
        
       });

        

    });
    ws.on('close', function() {
        console.log("I Lost a client");
    });
});

