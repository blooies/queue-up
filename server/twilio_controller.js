var twilio = require("../node_modules/twilio/lib");
var accountSid = 'AC55e374775b226d4fb6da4e8158d71c9f'; // Your Account SID from www.twilio.com/console
var authToken = 'b667a3a7c7fe347a962b649ea9bbb195';   // Your Auth Token from www.twilio.com/console
var client = new twilio.RestClient(accountSid, authToken);
const twilioNumber = "+15168304800";

TwilioController = {
    sendTextMessage: function(number, message) {
        console.log("inside twilio controller", number, message)
        number = "+1" + number;
        client.messages.create({
            body: message,
            to: number,  // Text this number
            from: twilioNumber // From a valid Twilio number
        }, function(err, message) {
            console.log(message);
            if (err) console.log("ERROR", err);
            return message.sid;
        });
    }
}
