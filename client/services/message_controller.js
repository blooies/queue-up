MessageController = {
    getMessage: function(queueNumber, name) {
        var message = "Hey " + name + '! ';
        message += "Success! You're number " + queueNumber + '. ';
        message += "We will text you later to come back at a specified time. "
        message += "See you then!";
        return message;
    }
}