TwilioController = {
    accountSid: 'AC822b578b38227f22193021b9ac9ba73e',
    authToken: 'bf5ff19ff629d49e334b42131f90ea5b',
    client: require('twilio')(this.accountSid, this.authToken),
    sendTextMessage: function() {
        this.client.messages.create({ 
            to: "+15165471888", 
            from: "+15165471888", 
            body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
            mediaUrl: "https://c1.staticflickr.com/3/2899/14341091933_1e92e62d12_b.jpg",  
        }, function(err, message) { 
            console.log(message.sid); 
        });
    }
}
